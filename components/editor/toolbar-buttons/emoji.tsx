"use client"

import { Icons } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from "@tiptap/react"
import EmojiPicker, { Theme } from "emoji-picker-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

interface EmojiProps {
  editor: Editor | null
}

export default function Emoji({ editor }: EmojiProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [pickerStyle, setPickerStyle] = useState({})
  const containerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const calculatePickerPosition = () => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect()
      const isMobile = window.innerWidth <= 768

      if (isMobile) {
        setPickerStyle({
          position: "fixed",
          top: `${rect.bottom + window.scrollY}px`,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        })
      } else {
        setPickerStyle({
          position: "absolute",
          top: "100%",
          left: "0",
          zIndex: 1000,
        })
      }
    }
  }

  const handleToggle = () => {
    if (!isOpen) {
      calculatePickerPosition()
    }
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative" ref={containerRef}>
      <Toggle
        pressed={isOpen}
        onPressedChange={handleToggle}
        title="Emoji"
        ref={toggleRef}
      >
        <Icons.smilePlus className="h-4 w-4" />
      </Toggle>
      {isOpen && (
        <div style={pickerStyle}>
          <EmojiPicker
            onEmojiClick={({ emoji }) => {
              editor?.commands.insertContent(emoji)
              setIsOpen(false)
            }}
            theme={resolvedTheme === "dark" ? Theme.DARK : Theme.LIGHT}
            className="w-[240px] h-[300px] md:w-[400px] md:h-[500px]"
          />
        </div>
      )}
    </div>
  )
}
