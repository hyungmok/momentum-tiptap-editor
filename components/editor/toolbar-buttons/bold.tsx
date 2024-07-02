import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface BoldProps {
  editor: Editor | null
}

export default function Bold({ editor }: BoldProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("bold")}
      onPressedChange={() => editor.chain().focus().toggleBold().run()}
    >
      <span title="Bold">
        <Icons.bold className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
