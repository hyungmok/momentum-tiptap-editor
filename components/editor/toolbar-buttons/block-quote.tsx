import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface EditorToolbarProps {
  editor: Editor | null
}

export default function BlockQuote({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("blockQuote")}
      onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
    >
      <span title="Text Quote">
        <Icons.quote className="h-4 w-4" />
      </span>
    </Toggle>
  )
}