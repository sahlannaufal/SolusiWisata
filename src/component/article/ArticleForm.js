'use client'
import { useCreateArticle, useGetArticle } from '@/hooks/ArticleHooks';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Tiptap from '../Tiptap';

const ArticleForm = () => {
  const [foto, setFoto] = useState(null);
  const { data, isLoading: isLoadingArticle } = useGetArticle();
  const { mutate: createArticle, isPending: isPendingCreate } = useCreateArticle();

  const initialValues = {
    judul: '',
    konten: '',
    penulis: '',
    judul_foto: '',
    foto: null,
  };

  const [initialFormValues, setInitialFormValues] = useState(initialValues);

  useEffect(() => {
    if (!isLoadingArticle && data) {
      setInitialFormValues({
        judul: data.judul || '',
        konten: data.konten || '',
        penulis: data.penulis || '',
        judul_foto: data.judul_foto || '',
        foto: null,
      });
    }
  }, [isLoadingArticle, data]);

  const handleDeskripsiChange = (html, setFieldValue) => {
    setFieldValue('konten', html);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append('judul', values.judul);
    formData.append('konten', values.konten);
    formData.append('penulis', values.penulis);
    formData.append('judul_foto', values.judul_foto);
    if (foto != null) {
      formData.append('foto', foto);
    }

    createArticle(formData);
    setSubmitting(false);
  };

  if (isLoadingArticle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='font-bold text-center pt-4 text-lg'>
        Article Form
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="grid gap-4 px-4 md:px-10">
            <label htmlFor='judul' className='text-sm font-medium text-gray-700'>Judul</label>
            <Field
              name="judul"
              type="text"
              placeholder="Judul Article"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name='judul'
              component="div"
              className='text-red-500 text-sm'
            />

            <label htmlFor='konten' className='text-sm font-medium text-gray-700'>Konten</label>
            <Tiptap
              value={initialFormValues.konten}
              onChange={(html) => handleDeskripsiChange(html, setFieldValue)}
            />
            <ErrorMessage
              name='konten'
              component="div"
              className='text-red-500 text-sm'
            />

            <label htmlFor='penulis' className='text-sm font-medium text-gray-700'>Penulis</label>
            <Field
              name="penulis"
              type="text"
              placeholder="Penulis"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name='penulis'
              component="div"
              className='text-red-500 text-sm'
            />

            <label htmlFor='judul_foto' className='text-sm font-medium text-gray-700'>Judul Foto</label>
            <Field
              name="judul_foto"
              type="text"
              placeholder="Judul Foto"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name='judul_foto'
              component="div"
              className='text-red-500 text-sm'
            />

            <label htmlFor='foto' className='text-sm font-medium text-gray-700'>Foto Article</label>
            <input
              id='foto'
              name='foto'
              type='file'
              onChange={
                e => {
                  setFieldValue("foto", e.currentTarget.files[0]);
                  setFoto(e.currentTarget.files[0]);
                }
              }
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
  );
};

export default ArticleForm;
