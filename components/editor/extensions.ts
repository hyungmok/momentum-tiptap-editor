import BubbleMenuExtension from "@tiptap/extension-bubble-menu"
import Color from "@tiptap/extension-color"
import TiptapLink from "@tiptap/extension-link"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Youtube from "@tiptap/extension-youtube"
import StarterKit from "@tiptap/starter-kit"
import GlobalDragHandle from "tiptap-extension-global-drag-handle"
import ImageResize from "tiptap-extension-resize-image"

const starterKit = StarterKit.configure()
const table = Table.configure({ resizable: true })
const tableCell = TableCell.configure()
const tableRow = TableRow.configure()
const tableHeader = TableHeader.configure()
const bubbleMenu = BubbleMenuExtension.configure()
const color = Color.configure()
const imageResize = ImageResize.configure()
const tiptapLink = TiptapLink.configure()
const textAlign = TextAlign.configure({
  types: ["heading", "paragraph"],
  alignments: ["left", "center", "right", "justify"],
})
const textStyle = TextStyle.configure()
const youtube = Youtube.configure({ controls: true, nocookie: true })
const globalDragHandle = GlobalDragHandle.configure({
  dragHandleWidth: 20,
  scrollTreshold: 100,
})

export default [
  starterKit,
  bubbleMenu,
  color,
  table,
  tableCell,
  tableRow,
  tableHeader,
  textAlign,
  textStyle,
  tiptapLink,
  youtube,
  globalDragHandle,
  imageResize,
]
