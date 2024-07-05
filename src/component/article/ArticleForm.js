'use client'
import { useCreateArticle, useGetArticle } from '@/hooks/ArticleHooks';
import { Button, FileInput, Label, TextInput } from 'flowbite-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

const ArticleForm = () => {

  const [judul, setJudul] = useState('');
  const [konten, setKonten] = useState('');
  const [penulis, setPenulis] = useState('');
  const [judul_foto, setJudul_foto] = useState('');
  const [foto, setFoto] = useState(null);
  const [data, isLoadingArticle] = useGetArticle();
  const { mutate: createArticle, isPendingCreate } = useCreateArticle();

  useEffect(() => {
    if (!isLoadingArticle && data) {
      setJudul(data.judul);
      setKonten(data.konten);
      setPenulis(data.penulis);
      setJudul_foto(data.judul_foto);
    }
  }, [isLoadingArticle, data]);  

  const handleSubmit = async (values, { setSubmitting}) => {
    const formData = new FormData();
    formData.append('judul', values.judul);
    formData.append('konten', values.konten);
    formData.append('penulis', values.penulis);
    formData.append('judul_foto', values.judul_foto);
    if (foto != null) {
      formData.append('foto', foto);
    }

    if (data == null) {
      createArticle(formData);
    }
    setSubmitting(false);
  };

  if (isLoadingArticle) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div className='font-bold text-center pt-4 text-lg'>
      Article Form
    </div>
    <Formik
      enableReinitialize={true}
      initialValues={{judul: judul, konten: konten, penulis: penulis, judul_foto: judul_foto, foto: null}}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting}) => (
        <Form className="grid gap-4 px-4 md:px-10">
          <Label htmlFor='judul' value='judul' color={'#00384F'}/>
          <Field 
            name="judul"
            as={TextInput}
            id="judul"
            type="text"
            placeholder="Judul Article"
            required
          />
          <ErrorMessage 
            name='judul'
            component="div"
            className='text-red-500 text-sm'
          />
          <Label htmlFor='konten' value='Field of Konten' color={'#00384F'}/>
          <Field 
            name="konten"
            as={TextInput}
            id="konten"
            type="text"
            placeholder="Konten Article"
            required
          />
          <ErrorMessage 
            name='konten'
            component="div"
            className='text-red-500 text-sm'
          />
          <Label htmlFor='penulis' value='Field of penulis' color={'#00384F'}/>
          <Field 
            name="penulis"
            as={TextInput}
            id="penulis"
            type="text"
            placeholder="Penulis"
            required
          />
          <ErrorMessage 
            name='penulis'
            component="div"
            className='text-red-500 text-sm'
          />
          <Label htmlFor='judul_foto' value='Field of judul_foto' color={'#00384F'}/>
          <Field 
            name="judul_foto"
            as={TextInput}
            id="judul_foto"
            type="text"
            placeholder="judul_foto"
            required
          />
          <ErrorMessage 
            name='judul_foto'
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
  );
};

export default ArticleForm;
