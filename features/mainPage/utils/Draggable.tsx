"use client"

import { useDraggable } from "@dnd-kit/core"

const Draggable = ({ id, children, className, style, activeDrag }: any) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`cursor-grab ${className || "rounded-lg border bg-white"} z-51 ${activeDrag === id ? "!opacity-0" : ""}`}
    >
      {children}
    </div>
  )
}

export default Draggable
