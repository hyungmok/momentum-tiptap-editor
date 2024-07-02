import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface EditorToolbarProps {
  editor: Editor | null
}

export default function OrderedList({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("orderedList")}
      onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
    >
      <span title="Ordered List">
        <Icons.listOrdered className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
