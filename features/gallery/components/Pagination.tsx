import React from "react"
import Image from "next/image"
import leftArrow from "@/features/gallery/assets/icons/arrowLeft.svg"
import rightArrow from "@/features/gallery/assets/icons/arrowRight.svg"
import { getPaginationRange } from "@/features/gallery/utils/pagination"
import { PaginationProps } from "@/types"

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="m-auto flex max-w-[420px] items-center gap-3 rounded-[5px] border-[#e6e6e6] bg-white">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center disabled:cursor-not-allowed"
      >
        <Image src={leftArrow} width={14} height={10} alt="left arrow" />
      </button>

      {getPaginationRange(currentPage, totalPages).map((item, idx) => {
        if (item === "ELLIPSIS")
          return (
            <span key={`ellipsis-${idx}`} className="px-1 text-[#777]">
              ...
            </span>
          )

        const isActive = item === currentPage
        return (
          <button
            key={item}
            onClick={() => onPageChange(item as number)}
            aria-current={isActive ? "page" : undefined}
            className={`flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border-[1px] ${
              isActive
                ? "border-[#e6e6e6] bg-[#e6e6e6]"
                : "border-[#e6e6e6] bg-white hover:bg-[#f5f5f5]"
            }`}
          >
            {item}
          </button>
        )
      })}

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center disabled:cursor-not-allowed"
      >
        <Image src={rightArrow} width={14} height={10} alt="right arrow" />
      </button>
    </div>
  )
}

export default Pagination
