import { Editor } from "@tiptap/react"
import { CldUploadButton } from "next-cloudinary"
import { Icons } from "../../icons"

interface ImageProps {
  editor: Editor | null
}

export default function Image({ editor }: ImageProps) {
  if (!editor) {
    return null
  }

  return (
    <div
      title="Image"
      className="h-9 px-[10px] justify-center items-center flex hover:bg-accent rounded-md"
    >
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onUpload={({ event, info }) => {
          if (event === "success" && info && typeof info !== "string") {
            editor.chain().focus().setImage({ src: info.secure_url }).run()
          }
        }}
      >
        <Icons.imagePlus className="h-4 w-4" />
      </CldUploadButton>
    </div>
  )
}
