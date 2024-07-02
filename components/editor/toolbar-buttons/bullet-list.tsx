import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface EditorToolbarProps {
  editor: Editor | null
}

export default function BulletList({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("bulletList")}
      onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
    >
      <span title="Unordered List">
        <Icons.list className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
