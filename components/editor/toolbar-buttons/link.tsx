import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"

interface LinkProps {
  editor: Editor | null
}

export default function Link({ editor }: LinkProps) {
  if (!editor) {
    return null
  }

  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("link")}
      onPressedChange={() => {
        const previousUrl = editor.getAttributes("link")?.href || ""
        const url: any = window.prompt("URL", previousUrl)
        if (url === "" || url === null) {
          editor.chain().focus().extendMarkRange("link").unsetLink().run()
        } else {
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run()
        }
      }}
    >
      <span title="Link">
        <Icons.link className="h-4 w-4" />
      </span>
    </Toggle>
  )
}
