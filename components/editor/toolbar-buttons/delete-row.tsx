import { Icons } from "@/components/icons"
import { Editor } from "@tiptap/react"

interface DeleteRowProps {
  editor: Editor | null
}

export default function DeleteRow({ editor }: DeleteRowProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="inline-flex items-center justify-center h-9 px-2.5 hover:bg-accent">
      <button
        type="button"
        onClick={() => editor.chain().focus().deleteRow().run()}
        className="w-4 h-6 cursor-pointer flex items-center justify-center"
      >
        <span title="Delete Row">
          <Icons.deleteRow className="h-4 w-4" />
        </span>
      </button>
    </div>
  )
}
