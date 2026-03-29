"use client"

import { useState, useEffect } from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"

type PaginationProps = {
  embla: UseEmblaCarouselType | null // pass the embla instance
}

export const EmblaPagination = ({ embla }: PaginationProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const emblaApi = embla as any

  useEffect(() => {
    if (!embla) return

   
    setScrollSnaps(emblaApi.scrollSnapList())

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()

    return () => emblaApi.off("select", onSelect)
  }, [embla])

  if (!embla) return null

  return (
    <div className="mt-4 flex justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            index === selectedIndex ? "bg-[#BAD8FC]" : "bg-[#E6E6E6]"
          }`}
          onClick={() => emblaApi.scrollTo(index)}
        />
      ))}
    </div>
  )
}
