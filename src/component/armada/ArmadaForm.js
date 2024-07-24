'use client'
import { useCreateArmada, useGetArmada } from "@/hooks/ArmadaHooks";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";


const ArmadaForm = () => {

    const [merk, setMerk] = useState('');
    const [jenis, setJenis] = useState('');
    const [harga, setHarga] = useState('');
    const [seat, setSeat] = useState('');
    const [fitur, setFitur] = useState('');
    const [foto, setFoto] = useState(null);
    const [data, isLoadingArmada] = useGetArmada();
    const {mutate: createArmada, isPendingCreate} = useCreateArmada();

    useEffect(() => {
        if (!isLoadingArmada && data) {
            setMerk(data.merk);
            setJenis(data.jenis);
            setHarga(data.harga);
            setSeat(data.seat);
            setFitur(data.fitur);
        }
    }, [isLoadingArmada, data]);

    const handleSubmit = async (values, {setSubmitting}) => {
        const formData = new FormData();
        formData.append('merk', values.merk);
        formData.append('jenis', values.jenis);
        formData.append('harga', values.harga);
        formData.append('seat', values.seat);
        formData.append('fitur', values.fitur);
        if (foto != null) {
            formData.append('foto', foto);
        }
        createArmada(formData)
        setSubmitting(false);
    };

    if (isLoadingArmada) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="font-bold text-center pt-4 text-lg">
                Armada Form
            </div>
            <Formik
                enableReinitialize={true}
                initialValues={{ merk: merk, jenis: jenis, harga: harga, seat: seat, fitur: fitur, foto: null }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, isSubmitting }) => (
                    <Form className="grid gap-4 px-4 md:px-10">
                        <label htmlFor="merk" className='text-sm font-medium text-gray-700'>Merk</label>
                        <Field 
                            name="merk"
                            type="text"
                            placeholder="Merk Armada"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage 
                            name="merk"
                            component="div"
                            className='text-red-500 text-sm'
                        />
                        
                        <label htmlFor="jenis" className='text-sm font-medium text-gray-700'>Jenis</label>
                        <Field 
                            name="jenis"
                            type="text"
                            placeholder="Jenis Armada"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage 
                            name="jenis"
                            component="div"
                            className='text-red-500 text-sm'
                        />
                        
                        <label htmlFor="harga" className='text-sm font-medium text-gray-700'>Harga</label>
                        <Field 
                            name="harga"
                            type="text"
                            placeholder="Harga Armada"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage 
                            name="harga"
                            component="div"
                            className='text-red-500 text-sm'
                        />
                        
                        <label htmlFor="seat" className='text-sm font-medium text-gray-700'>Seat</label>
                        <Field 
                            name="seat"
                            type="text"
                            placeholder="Seat Armada"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage 
                            name="seat"
                            component="div"
                            className='text-red-500 text-sm'
                        />
                        
                        <label htmlFor="fitur" className='text-sm font-medium text-gray-700'>Fitur</label>
                        <Field 
                            name="fitur"
                            type="text"
                            placeholder="Fitur Armada"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage 
                            name="fitur"
                            component="div"
                            className='text-red-500 text-sm'
                        />
                        
                        <label htmlFor="foto" className='text-sm font-medium text-gray-700'>Foto Armada</label>
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
                        
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isPendingCreate || isSubmitting}
                                className="bg-blue-700 text-white w-full md:max-w-20 px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ArmadaForm;