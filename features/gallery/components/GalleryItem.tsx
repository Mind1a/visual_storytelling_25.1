import React from "react"
import Image from "next/image"
import downloadIcon from "@/features/gallery/assets/icons/Download icon.png"
import { GalleryItemProps } from "@/types"

function GalleryItem({ item, onDownload, index }: GalleryItemProps) {
  const handleDownload = () => {
    const imageUrl =
      typeof item.image === "string" ? item.image : item.image.src
    onDownload(imageUrl, item.word)
  }

  return (
    <div>
      <div
        className={`relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg border-[4px] p-[25px] shadow-md ${index % 2 === 0 ? "border-[#bad8fc]" : "border-[#f5b3a3]"}`}
      >
        <Image
          src={downloadIcon}
          onClick={handleDownload}
          alt="download"
          className="absolute right-2 bottom-2 h-[30px] w-[30px] cursor-pointer transition-opacity hover:opacity-80"
        />
        <Image
          src={item.image}
          alt={item.word}
          className="h-full w-full object-contain"
        />
      </div>
      <p className="text-center text-[20px] text-[#111010]">{item.word}</p>
    </div>
  )
}

export default GalleryItem
