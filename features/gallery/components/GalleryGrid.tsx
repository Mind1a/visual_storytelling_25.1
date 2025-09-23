import React from "react"
import GalleryItem from "@/features/gallery/components/GalleryItem"
import { GalleryGridProps } from "@/types"

function GalleryGrid({ items, onDownload }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-[10px] gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} onDownload={onDownload} />
      ))}
    </div>
  )
}

export default GalleryGrid
