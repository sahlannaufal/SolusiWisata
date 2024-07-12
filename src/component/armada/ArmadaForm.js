'use client'
import { useCreateArmada, useGetArmada } from "@/hooks/ArmadaHooks";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
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
            initialValues={{merk: merk, jenis: jenis, harga: harga, seat: seat, fitur: fitur, foto:null}}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, isSubmitting}) => (
                <Form className="grid gap-4 px-4 md:px-10" >
                    <Label htmlFor="merk" value="merk" color={'#00384F'}/>
                    <Field 
                        name="merk"
                        as={TextInput}
                        id="merk"
                        type="text"
                        placeholder="Merk Armada"
                        required
                    />
                    <ErrorMessage 
                    name="merk"
                    component="div"
                    className='text-red-500 text-sm'
                    />
                    <Label htmlFor="jenis" value="jenis" color={'#00384F'}/>
                    <Field 
                        name="jenis"
                        as={TextInput}
                        id="jenis"
                        type="text"
                        placeholder="Jenis Armada"
                        required
                    />
                    <ErrorMessage 
                    name="jenis"
                    component="div"
                    className='text-red-500 text-sm'
                    />
                    <Label htmlFor="harga" value="harga" color={'#00384F'}/>
                    <Field 
                        name="harga"
                        as={TextInput}
                        id="harga"
                        type="text"
                        placeholder="harga Armada"
                        required
                    />
                    <ErrorMessage 
                    name="harga"
                    component="div"
                    className='text-red-500 text-sm'
                    />
                    <Label htmlFor="seat" value="seat" color={'#00384F'}/>
                    <Field 
                        name="seat"
                        as={TextInput}
                        id="seat"
                        type="text"
                        placeholder="seat Armada"
                        required
                    />
                    <ErrorMessage 
                    name="seat"
                    component="div"
                    className='text-red-500 text-sm'
                    />
                    <Label htmlFor="fitur" value="fitur" color={'#00384F'}/>
                    <Field 
                        name="fitur"
                        as={TextInput}
                        id="fitur"
                        type="text"
                        placeholder="fitur Armada"
                        required
                    />
                    <ErrorMessage 
                    name="fitur"
                    component="div"
                    className='text-red-500 text-sm'
                    />
                    <Label htmlFor="foto" value="Foto Armada" color={'#00384F'}/>
                    <FileInput 
                        id="foto"
                        onChange={
                            e => {
                                setFieldValue("foto", e.currentTarget.files[0]);
                                setFoto(e.currentTarget.files[0]);
                            }
                        }
                    />
                    <ErrorMessage 
                    name="foto"
                    component="div"
                    className='text-red-500 text-sm'
                    />
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            disabled={isPendingCreate || isSubmitting}
                            className="bg-blue-700 text-white w-full md:max-w-20"
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
        </>
    );
};

export default ArmadaForm;