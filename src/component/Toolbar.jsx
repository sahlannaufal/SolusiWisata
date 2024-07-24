// components/Toolbar.js
import React from 'react';

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap space-x-2 mb-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-4 py-2 border rounded ${editor.isActive('bold') ? 'bg-gray-300 font-bold' : 'bg-white'} ${!editor.can().chain().focus().toggleBold().run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`px-4 py-2 border rounded ${editor.isActive('italic') ? 'bg-gray-300 italic' : 'bg-white'} ${!editor.can().chain().focus().toggleItalic().run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`px-4 py-2 border rounded ${editor.isActive('underline') ? 'bg-gray-300 underline' : 'bg-white'} ${!editor.can().chain().focus().toggleUnderline().run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`px-4 py-2 border rounded ${editor.isActive('strike') ? 'bg-gray-300 line-through' : 'bg-white'} ${!editor.can().chain().focus().toggleStrike().run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Strikethrough
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-4 py-2 border rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-300 font-bold' : 'bg-white'} ${!editor.can().chain().focus().toggleHeading({ level: 1 }).run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-4 py-2 border rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-300 font-bold' : 'bg-white'} ${!editor.can().chain().focus().toggleHeading({ level: 2 }).run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={`px-4 py-2 border rounded ${editor.isActive('bulletList') ? 'bg-gray-300' : 'bg-white'} ${!editor.can().chain().focus().toggleBulletList().run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={`px-4 py-2 border rounded ${editor.isActive('orderedList') ? 'bg-gray-300' : 'bg-white'} ${!editor.can().chain().focus().toggleOrderedList().run() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Ordered List
      </button>
    </div>
  );
};

export default Toolbar;
