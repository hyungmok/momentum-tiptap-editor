import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface CodeBlockProps {
  editor: Editor | null
}

export default function CodeBlock({ editor }: CodeBlockProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("codeBlock")}
      onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
    >
      <span title="Code Block">
        <Icons.code className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
