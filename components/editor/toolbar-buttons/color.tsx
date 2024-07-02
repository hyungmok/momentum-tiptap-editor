import { Editor } from "@tiptap/react"

interface ColorProps {
  editor: Editor | null
}

export default function Color({ editor }: ColorProps) {
  if (!editor) {
    return null
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    editor.chain().focus().setColor(event.target.value).run()
  }

  return (
    <input
      type="color"
      onInput={handleColorChange}
      value={editor.getAttributes("textStyle").color || "#000000"}
      data-testid="setColor"
      className="w-6 h-6 border-none cursor-pointer"
      title="Text Color"
    />
  )
}
