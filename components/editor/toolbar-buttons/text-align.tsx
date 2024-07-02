import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface TextAlignProps {
  editor: Editor | null
  textAlign: "left" | "center" | "right" | "justify"
}

export default function TextAlign({ editor, textAlign }: TextAlignProps) {
  if (!editor) {
    return null
  }

  const Icon =
    Icons[
      `align${textAlign.charAt(0).toUpperCase()}${textAlign.slice(
        1
      )}` as keyof typeof Icons
    ]

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive({ textAlign })}
      onPressedChange={() => {
        editor.chain().focus().setTextAlign(textAlign).run()
      }}
    >
      <span title="Text Align Center">
        <Icon className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
