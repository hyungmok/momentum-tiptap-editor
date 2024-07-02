import { Icons } from "@/components/icons"
import { Editor } from "@tiptap/react"

const YOUTUBE_VIDEO_WIDTH = 640
const YOUTUBE_VIDEO_HEIGHT = 480

interface YouTubeProps {
  editor: Editor | null
}

export default function YouTube({ editor }: YouTubeProps) {
  if (!editor) {
    return null
  }

  return (
    <div
      title="YouTube"
      className="h-9 px-[10px] justify-center items-center flex hover:bg-accent rounded-md"
    >
      <button
        type="button"
        onClick={() => {
          const url = window.prompt("YouTube URL", "")
          if (url) {
            editor
              .chain()
              .focus()
              .setYoutubeVideo({
                src: url,
                width: YOUTUBE_VIDEO_WIDTH,
                height: YOUTUBE_VIDEO_HEIGHT,
              })
              .run()
          }
        }}
      >
        <Icons.youtube className="h-4 w-4" />
      </button>
    </div>
  )
}
