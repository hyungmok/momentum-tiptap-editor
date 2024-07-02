import { Icons } from "@/components/icons"
import { Editor } from "@tiptap/react"

interface AddRowAfterProps {
  editor: Editor | null
}

export default function AddRowAfter({ editor }: AddRowAfterProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="inline-flex items-center justify-center h-9 px-2.5 hover:bg-accent">
      <button
        type="button"
        onClick={() => editor.chain().focus().addRowAfter().run()}
        className="w-4 h-6 cursor-pointer flex items-center justify-center"
      >
        <span title="Add Row After">
          <Icons.addRowAfter className="h-4 w-4" />
        </span>
      </button>
    </div>
  )
}
