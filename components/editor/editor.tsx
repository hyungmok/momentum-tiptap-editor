"use client"

import "@/styles/editor.scss"
import { EditorContent, useEditor } from "@tiptap/react"
import { useState } from "react"
import Bubble from "./bubble"
import EditorToolbar from "./editor-toolbar"
import defaultExtensions from "./extensions"

export default function Editor() {
  const [content, setContent] = useState("")
  const editor = useEditor({
    content,
    extensions: [...defaultExtensions],
    onCreate({ editor }) {},
    onUpdate({ editor }) {
      setContent(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          "border h-[500px] !p-[1.5rem] focus:outline-none overflow-y-auto",
      },
    },
  })

  return (
    <div className="p-4">
      {editor && (
        <>
          <Bubble editor={editor} />
          <EditorToolbar editor={editor} />
        </>
      )}
      <EditorContent editor={editor} />
    </div>
  )
}
