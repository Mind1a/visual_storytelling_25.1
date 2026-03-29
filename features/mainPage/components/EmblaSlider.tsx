"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"

type Props = {
  children: React.ReactNode
}

export const EmblaSlider = ({
  children,
  onInit,
  isDragging,
}: {
  children: React.ReactNode
  onInit?: (embla: any | null) => void
  isDragging?: boolean
}) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  })
  const emblaApi = embla as any

  useEffect(() => {
    if (onInit) onInit(emblaApi)
  }, [embla, onInit])

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
      style={{ pointerEvents: isDragging ? "none" : "auto" }}
    >
      <div className="flex">{children}</div>
    </div>
  )
}

export const EmblaSlide = ({ children }: Props) => {
  return (
    <div className="min-w-0 flex-shrink-0 basis-[40%] select-none">
      {children}
    </div>
  )
}
