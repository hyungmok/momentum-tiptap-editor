import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface ItalicProps {
  editor: Editor | null
}

export default function Italic({ editor }: ItalicProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("italic")}
      onPressedChange={() => editor.chain().focus().toggleItalic().run()}
    >
      <span title="Italic">
        <Icons.italic className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
