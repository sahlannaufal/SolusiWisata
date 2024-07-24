'use client'
import { useCreatePaket, useGetPaket } from "@/hooks/PaketHooks";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Tiptap from "../Tiptap";

const PaketForm = () => {
    const [foto, setFoto] = useState(null);
    const { data, isLoading: isLoadingPaket } = useGetPaket();
    const { mutate: createPaket, isPending: isPendingCreate } = useCreatePaket();

    const initialValues = {
        nama: '',
        destinasi: '',
        waktu: '',
        harga: '',
        deskripsi: '',
        foto: null,
    };

    const [initialFormValues, setInitialFormValues] = useState(initialValues);

    useEffect(() => {
        if (!isLoadingPaket && data) {
            setInitialFormValues({
                nama: data.nama || '',
                destinasi: data.destinasi || '',
                waktu: data.waktu || '',
                harga: data.harga || '',
                deskripsi: data.deskripsi || '',
                foto: null,
            });
        }
    }, [isLoadingPaket, data]);

    const handleDeskripsiChange = (html, setFieldValue) => {
        setFieldValue('deskripsi', html);
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append('nama', values.nama);
        formData.append('destinasi', values.destinasi);
        formData.append('waktu', values.waktu);
        formData.append('harga', values.harga);
        formData.append('deskripsi', values.deskripsi);
        if (foto != null) {
            formData.append('foto', foto);
        }

        createPaket(formData);
        setSubmitting(false);
    };

    if (isLoadingPaket) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="font-bold text-center pt-4 text-lg">
                Paket Form
            </div>
            <Formik
                enableReinitialize={true}
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, isSubmitting }) => (
                    <Form className="grid gap-4 px-4 md:px-10">
                        <label htmlFor='nama' className='text-sm font-medium text-gray-700'>Nama</label>
                        <Field
                            name="nama"
                            type="text"
                            placeholder="Nama Paket"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name='nama'
                            component="div"
                            className='text-red-500 text-sm'
                        />

                        <label htmlFor='destinasi' className='text-sm font-medium text-gray-700'>Destinasi</label>
                        <Field
                            name="destinasi"
                            type="text"
                            placeholder="Destinasi Paket"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name='destinasi'
                            component="div"
                            className='text-red-500 text-sm'
                        />

                        <label htmlFor='waktu' className='text-sm font-medium text-gray-700'>Waktu</label>
                        <Field
                            name="waktu"
                            type="text"
                            placeholder="Waktu Paket"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name='waktu'
                            component="div"
                            className='text-red-500 text-sm'
                        />

                        <label htmlFor='harga' className='text-sm font-medium text-gray-700'>Harga</label>
                        <Field
                            name="harga"
                            type="text"
                            placeholder="Harga Paket"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name='harga'
                            component="div"
                            className='text-red-500 text-sm'
                        />

                        <label htmlFor='deskripsi' className='text-sm font-medium text-gray-700'>Deskripsi</label>
                        <Tiptap
                            value={initialFormValues.deskripsi}
                            onChange={(html) => handleDeskripsiChange(html, setFieldValue)}
                        />
                        <ErrorMessage
                            name='deskripsi'
                            component="div"
                            className='text-red-500 text-sm'
                        />

                        <label htmlFor='foto' className='text-sm font-medium text-gray-700'>Foto Paket</label>
                        <input
                            id='foto'
                            name='foto'
                            type='file'
                            onChange={e => {
                                setFieldValue("foto", e.currentTarget.files[0]);
                                setFoto(e.currentTarget.files[0]);
                            }}
                            className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                        />
                        <ErrorMessage
                            name='foto'
                            component="div"
                            className='text-red-500 text-sm'
                        />

                        <div className='flex justify-end'>
                            <button
                                type='submit'
                                disabled={isPendingCreate || isSubmitting}
                                className='bg-blue-700 text-white w-full md:max-w-20 px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default PaketForm;
