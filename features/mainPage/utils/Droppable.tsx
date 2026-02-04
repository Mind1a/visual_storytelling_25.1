"use client"

import { useDroppable } from "@dnd-kit/core"
const Droppable = ({ id, value, className, isHighlighted, idx }: any) => {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`${className} ${isHighlighted ? "border-4 border-green-500" : ""} ${
        idx === 0 || idx === 2
          ? "border-[#A4BEF3]"
          : idx === 1 || idx === 3
            ? "border-[#F5E393]"
            : idx === 4
              ? "border-[#F5B3A3]"
              : "border-transparent"
      }`}
    >
      {value ?? "Drop here"}
    </div>
  )
}

export default Droppable
