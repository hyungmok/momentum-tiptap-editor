import { BubbleMenu, Editor } from "@tiptap/react"
import BlockQuote from "./toolbar-buttons/block-quote"
import Bold from "./toolbar-buttons/bold"
import BulletList from "./toolbar-buttons/bullet-list"
import CodeBlock from "./toolbar-buttons/code-block"
import Color from "./toolbar-buttons/color"
import Heading from "./toolbar-buttons/heading"
import Italic from "./toolbar-buttons/italic"
import Link from "./toolbar-buttons/link"
import OrderedList from "./toolbar-buttons/ordered-list"
import Strikethrough from "./toolbar-buttons/strikethrough"

interface BubbleProps {
  editor: Editor | null
}

export default function Bubble({ editor }: BubbleProps) {
  if (!editor) {
    return null
  }

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="px-2"
    >
      <div className="bubble-menu space-x-2 flex justify-center items-center">
        <Heading editor={editor} level={1} isIcon />
        <Heading editor={editor} level={2} isIcon />
        <Heading editor={editor} level={3} isIcon />
        <Color editor={editor} />
        <Bold editor={editor} />
        <Italic editor={editor} />
        <Strikethrough editor={editor} />
        <BulletList editor={editor} />
        <OrderedList editor={editor} />
        <BlockQuote editor={editor} />
        <Link editor={editor} />
        <CodeBlock editor={editor} />
      </div>
    </BubbleMenu>
  )
}
