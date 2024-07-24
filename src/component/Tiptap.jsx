'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import Toolbar from './Toolbar'

const Tiptap = ({value, onChange}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      Heading.configure({ levels: [1, 2] }),
      BulletList,
      OrderedList,
      Blockquote,
      CodeBlock,
    ],
    content: value,
    onUpdate: ({ editor}) => {
      onChange(editor.getHTML())
    },
  });

  return (
    <div className='flex flex-col justify-stretch min-h-[250px] p-4 border rounded'>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className='border p-4 rounded min-h-[200px]' />
    </div>
  )
}

export default Tiptap
