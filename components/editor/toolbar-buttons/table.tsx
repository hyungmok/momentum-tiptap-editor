import { Icons } from "@/components/icons"
import { Editor } from "@tiptap/react"

interface TableProps {
  editor: Editor | null
}

export default function Table({ editor }: TableProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="inline-flex items-center justify-center h-9 px-2.5 border-l-[1px] border-dashed hover:bg-accent">
      <button
        type="button"
        onClick={() => editor.chain().focus().insertTable().run()}
        className="w-4 h-6 cursor-pointer flex items-center justify-center"
      >
        <span title="Table">
          <Icons.table className="h-4 w-4" />
        </span>
      </button>
    </div>
  )
}
