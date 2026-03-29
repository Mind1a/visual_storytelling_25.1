"use client"

import { useDroppable } from "@dnd-kit/core"
const Droppable = ({
  id,
  value,
  className,
  isHighlighted,
  idx,
  isFourWords,
}: any) => {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`${className} ${isHighlighted ? "border-4 border-green-500" : ""} ${
        isFourWords
          ? idx === 0 || idx === 2 || idx === 4
            ? "border-[#A4BEF3]"
            : idx === 1 || idx === 5
              ? "border-[#F5E393]"
              : idx === 6
                ? "border-[#F5B3A3]"
                : idx === 3
                  ? "border-[#73C9C0]"
                  : "border-[transparent]"
          : idx === 0 || idx === 2
            ? "border-[#A4BEF3]"
            : idx === 1 || idx === 3
              ? "border-[#F5E393]"
              : idx === 4
                ? "border-[#F5B3A3]"
                : "border-transparent"
      }`}
    >
      {value ?? ""}
    </div>
  )
}

export default Droppable
