"use client"

import { useCallback, useRef, RefObject } from "react"
import html2canvas from "html2canvas"

const useScreenshot = (): [
  RefObject<HTMLDivElement | null>,
  () => Promise<void>,
] => {
  const ref = useRef<HTMLDivElement | null>(null)
  const takeScreenshot = useCallback(async () => {
    await document.fonts.ready
    if (ref.current) {
      const canvas = await html2canvas(ref.current)
      const imgData = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = imgData
      link.download = "screenshot.png"
      link.click()
    }
  }, [ref])

  return [ref, takeScreenshot]
}

export default useScreenshot
