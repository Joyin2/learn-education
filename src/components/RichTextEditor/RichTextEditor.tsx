'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEffect } from 'react';
import styles from './RichTextEditor.module.css';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'blog-image',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: styles.editorContent,
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.toolbar}>
        {/* Text Formatting */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? styles.active : ''}
            title="Bold (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? styles.active : ''}
            title="Italic (Ctrl+I)"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? styles.active : ''}
            title="Underline (Ctrl+U)"
          >
            <u>U</u>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? styles.active : ''}
            title="Strikethrough"
          >
            <s>S</s>
          </button>
        </div>

        {/* Headings */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? styles.active : ''}
            title="Paragraph"
          >
            P
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? styles.active : ''}
            title="Heading 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? styles.active : ''}
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? styles.active : ''}
            title="Heading 3"
          >
            H3
          </button>
        </div>

        {/* Lists */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? styles.active : ''}
            title="Bullet List"
          >
            ☰
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? styles.active : ''}
            title="Ordered List"
          >
            ≡
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? styles.active : ''}
            title="Blockquote"
          >
            ❝
          </button>
        </div>

        {/* Alignment */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? styles.active : ''}
            title="Align Left"
          >
            ⫷
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? styles.active : ''}
            title="Align Center"
          >
            ≡
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? styles.active : ''}
            title="Align Right"
          >
            ⫸
          </button>
        </div>

        {/* Media & Links */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={addLink}
            className={editor.isActive('link') ? styles.active : ''}
            title="Add Link"
          >
            🔗
          </button>
          <button
            type="button"
            onClick={addImage}
            title="Add Image"
          >
            🖼
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Horizontal Rule"
          >
            —
          </button>
        </div>

        {/* Code */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive('code') ? styles.active : ''}
            title="Inline Code"
          >
            &lt;/&gt;
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? styles.active : ''}
            title="Code Block"
          >
            { }
          </button>
        </div>

        {/* Undo/Redo */}
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Undo (Ctrl+Z)"
          >
            ↶
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Redo (Ctrl+Y)"
          >
            ↷
          </button>
        </div>
      </div>

      <EditorContent editor={editor} className={styles.editor} />
    </div>
  );
}
