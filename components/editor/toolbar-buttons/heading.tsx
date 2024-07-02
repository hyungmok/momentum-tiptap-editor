import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface HeadingProps {
  level: any
  editor: Editor | null
  isIcon?: boolean
}

const levels = [1, 2, 3, 4, 5, 6]

export default function Heading({
  level,
  editor,
  isIcon = false,
}: HeadingProps) {
  if (!editor) {
    return null
  }

  if (!levels.includes(level)) {
    return null
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const Icon = (Icons as any)[`heading${level}`] ?? null

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("heading", { level })}
      onPressedChange={() =>
        editor.chain().focus().toggleHeading({ level }).run()
      }
    >
      <span title={`Heading ${level}`}>
        {isIcon ? (
          <Icon className="h-4 w-4" />
        ) : (
          <Tag>{`Heading ${level}`}</Tag>
        )}
      </span>
    </Toggle>
  )
}
