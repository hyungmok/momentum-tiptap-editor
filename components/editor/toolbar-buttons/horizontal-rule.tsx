import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface HorizontalRuleProps {
  editor: Editor | null
}

export default function HorizontalRule({ editor }: HorizontalRuleProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("horizontalRule")}
      onPressedChange={() => editor.chain().focus().setHorizontalRule().run()}
    >
      <span title="Horizontal Rule">
        <Icons.minus className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
