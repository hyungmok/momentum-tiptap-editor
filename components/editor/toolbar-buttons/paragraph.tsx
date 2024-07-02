import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface ParagraphProps {
  editor: Editor | null
}

export default function Paragraph({ editor }: ParagraphProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("paragraph")}
      onPressedChange={() => editor.chain().focus().setParagraph().run()}
    >
      <span title="Paragraph">Normal text</span>
    </Toggle>
  )
}
