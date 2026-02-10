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
      className={`cursor-grab transition-all duration-300 ease-in-out hover:scale-110 ${className || "rounded-lg bg-white"} z-51 ${activeDrag === id ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  )
}

export default Draggable
