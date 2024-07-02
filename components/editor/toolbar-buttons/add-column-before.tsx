import { Icons } from "@/components/icons"
import { Editor } from "@tiptap/react"

interface AddColumnBeforeProps {
  editor: Editor | null
}

export default function AddColumnBefore({ editor }: AddColumnBeforeProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="inline-flex items-center justify-center h-9 px-2.5 hover:bg-accent">
      <button
        type="button"
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        className="w-4 h-6 cursor-pointer flex items-center justify-center"
      >
        <span title="Add Column Before">
          <Icons.addColumnBefore className="h-4 w-4" />
        </span>
      </button>
    </div>
  )
}
