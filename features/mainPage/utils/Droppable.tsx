"use client"

import { useDroppable } from "@dnd-kit/core"
const Droppable = ({ id, value, className, isHighlighted }: any) => {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`${className} ${isHighlighted ? "border-4 border-green-500" : ""}`}
    >
      {value ?? "Drop here"}
    </div>
  )
}

export default Droppable
