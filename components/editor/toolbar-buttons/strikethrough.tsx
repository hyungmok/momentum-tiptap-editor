import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface StrikeProps {
  editor: Editor | null
}

export default function Strikethrough({ editor }: StrikeProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("strike")}
      onPressedChange={() => editor.chain().focus().toggleStrike().run()}
    >
      <span title="Strikethrough">
        <Icons.strikethrough className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
