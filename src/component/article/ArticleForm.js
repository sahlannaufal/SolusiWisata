'use client'
import React, { useState } from 'react';

const ArticleForm = () => {
  const [articleData, setArticleData] = useState({
    judul: '',
    konten: '',
    penulis: '',
    judul_foto: '',
    foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const formData = new FormData();
      formData.append('judul', articleData.judul);
      formData.append('konten', articleData.konten);
      formData.append('penulis', articleData.penulis);
      formData.append('judul_foto', articleData.judul_foto);
      formData.append('foto', articleData.foto);

      const response = await fetch('http://103.149.177.42:3333/articles', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload article');
      }

      console.log('Article uploaded successfully!');
      setArticleData({
        judul: '',
        konten: '',
        penulis: '',
        judul_foto: '',
        foto: '',
      });
    } catch (error) {
      console.error('Error uploading article:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="judul"
        placeholder="Judul"
        value={articleData.judul}
        onChange={handleChange}
        required
      />
      <textarea
        name="konten"
        placeholder="Konten"
        value={articleData.konten}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="penulis"
        placeholder="Penulis"
        value={articleData.penulis}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="judul_foto"
        placeholder="Judul Foto"
        value={articleData.judul_foto}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="foto"
        onChange={(e) => setArticleData({ ...articleData, foto: e.target.files[0] })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;
