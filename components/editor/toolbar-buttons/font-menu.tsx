import { Icons } from "@/components/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Editor } from "@tiptap/react"
import Heading from "./heading"
import Paragraph from "./paragraph"

interface FontMenuProps {
  editor: Editor | null
}

export default function FontMenu({ editor }: FontMenuProps) {
  return (
    <div className="h-9 px-[8px] mx-[2px] justify-center items-center flex hover:bg-accent">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-between w-8 h-8">
            <Icons.caseSensitive className="w-4 h-4" />
            <Icons.chevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            <Paragraph editor={editor} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heading level={1} editor={editor} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heading level={2} editor={editor} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heading level={3} editor={editor} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heading level={4} editor={editor} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heading level={5} editor={editor} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heading level={6} editor={editor} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
