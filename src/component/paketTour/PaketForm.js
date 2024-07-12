'use client'
import { useCreatePaket, useGetPaket } from "@/hooks/PaketHooks";
import { formToJSON } from "axios";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";


const PaketForm =() => {

    const [nama, setNama] = useState('');
    const [destinasi, setDestinasi] = useState('');
    const [waktu, setWaktu] = useState('');
    const [harga, setHarga] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [foto, setFoto] =useState(null);  
    const [data, isLoadingPaket] = useGetPaket();
    const {mutate: createPaket, isPendingCreate } = useCreatePaket();

    useEffect(() => {
        if (!isLoadingPaket && data) {
            setNama(data.nama);
            setDestinasi(data.destinasi);
            setWaktu(data.waktu);
            setHarga(data.harga);
            setDeskripsi(data.deskripsi);
        }
    }, [isLoadingPaket, data]);

    const handleSubmit = async (values, {setSubmitting}) => {
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
        return <div>Loading...</div>
    }

    return (
        <>
        <div className="font-bold text-center pt-4 text-lg">
            Paket Form
        </div>
        <Formik
            enableReinitialize={true}
            initialValues={{nama: nama, destinasi: destinasi, waktu: waktu, harga: harga, deskripsi: deskripsi, foto: null }}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, isSubmitting}) => (
                <Form className="grid gap-4 px-4 md:px-10">
                    <Label htmlFor='nama' value='nama' color={'#00384F'}/>
                    <Field 
                        name="nama"
                        as={TextInput}
                        id="nama"
                        type="text"
                        placeholder="nama Article"
                        required
                    />
                    <ErrorMessage 
                        name='nama'
                        component="div"
                        className='text-red-500 text-sm'
                    />
                    <Label htmlFor='destinasi' value='destinasi' color={'#00384F'}/>
                    <Field 
                        name="destinasi"
                        as={TextInput}
                        id="destinasi"
                        type="text"
                        placeholder="destinasi Article"
                        required
                    />
                    <ErrorMessage 
                        name='destinasi'
                        component="div"
                        className='text-red-500 text-sm'
                    />
                    <Label htmlFor='waktu' value='waktu' color={'#00384F'}/>
                    <Field 
                        name="waktu"
                        as={TextInput}
                        id="waktu"
                        type="text"
                        placeholder="waktu Article"
                        required
                    />
                    <ErrorMessage 
                        name='waktu'
                        component="div"
                        className='text-red-500 text-sm'
                    />
                    <Label htmlFor='harga' value='harga' color={'#00384F'}/>
                    <Field 
                        name="harga"
                        as={TextInput}
                        id="harga"
                        type="text"
                        placeholder="harga Article"
                        required
                    />
                    <ErrorMessage 
                        name='harga'
                        component="div"
                        className='text-red-500 text-sm'
                    />
                    <Label htmlFor='deskripsi' value='deskripsi' color={'#00384F'}/>
                    <Field 
                        name="deskripsi"
                        as={TextInput}
                        id="deskripsi"
                        type="text"
                        placeholder="deskripsi Article"
                        required
                    />
                    <ErrorMessage 
                        name='deskripsi'
                        component="div"
                        className='text-red-500 text-sm'
                    />
                    <Label htmlFor='foto' value='Foto Article' color={'#00384F'}/>
                    <FileInput
                        id='foto'
                        onChange={
                        e => {
                            setFieldValue("foto", e.currentTarget.files[0]);
                            setFoto(e.currentTarget.files[0]);
                        }
                        }
                    />
                    <ErrorMessage 
                        name='foto'
                        component="div"
                        className='text-red-500 text-sm'
                    />
                    <div className='flex justify-end'>
                        <Button
                        type='submit'
                        disabled={isPendingCreate || isSubmitting}
                        className='bg-blue-700 text-white w-full md:max-w-20'
                        >
                        Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
        </>
    )
}

export default PaketForm;