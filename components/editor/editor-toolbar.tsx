"use client"

import { Editor } from "@tiptap/react"
import AddColumnAfter from "./toolbar-buttons/add-column-after"
import AddColumnBefore from "./toolbar-buttons/add-column-before"
import AddRowAfter from "./toolbar-buttons/add-row-after"
import AddRowBefore from "./toolbar-buttons/add-row-before"
import BlockQuote from "./toolbar-buttons/block-quote"
import Bold from "./toolbar-buttons/bold"
import BulletList from "./toolbar-buttons/bullet-list"
import CodeBlock from "./toolbar-buttons/code-block"
import Color from "./toolbar-buttons/color"
import DeleteColumn from "./toolbar-buttons/delete-column"
import DeleteRow from "./toolbar-buttons/delete-row"
import DeleteTable from "./toolbar-buttons/delete-table"
import Emoji from "./toolbar-buttons/emoji"
import FontMenu from "./toolbar-buttons/font-menu"
import HorizontalRule from "./toolbar-buttons/horizontal-rule"
import Image from "./toolbar-buttons/image"
import Italic from "./toolbar-buttons/italic"
import Link from "./toolbar-buttons/link"
import OrderedList from "./toolbar-buttons/ordered-list"
import Strikethrough from "./toolbar-buttons/strikethrough"
import Table from "./toolbar-buttons/table"
import TextAlign from "./toolbar-buttons/text-align"
import YouTube from "./toolbar-buttons/youtube"

interface EditorToolbarProps {
  editor: Editor | null
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="border border-b-0 flex flex-wrap items-center justify-start">
      <FontMenu editor={editor} />
      <Color editor={editor} />
      <Bold editor={editor} />
      <Italic editor={editor} />
      <Strikethrough editor={editor} />
      <TextAlign editor={editor} textAlign="left" />
      <TextAlign editor={editor} textAlign="center" />
      <TextAlign editor={editor} textAlign="right" />
      <TextAlign editor={editor} textAlign="justify" />
      <OrderedList editor={editor} />
      <BulletList editor={editor} />
      <BlockQuote editor={editor} />
      <HorizontalRule editor={editor} />
      <CodeBlock editor={editor} />
      <Link editor={editor} />
      <Image editor={editor} />
      <Emoji editor={editor} />
      <YouTube editor={editor} />
      <Table editor={editor} />
      <DeleteTable editor={editor} />
      <AddRowBefore editor={editor} />
      <AddRowAfter editor={editor} />
      <AddColumnBefore editor={editor} />
      <AddColumnAfter editor={editor} />
      <DeleteRow editor={editor} />
      <DeleteColumn editor={editor} />
    </div>
  )
}
