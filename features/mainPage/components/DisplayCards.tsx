"use client"

import SkeletonCard from "../utils/DisplayCardsSkeleton"
import Draggable from "../utils/Draggable"

export type PlaceholderDataType = {
  id: number
  text: string
  imgSrc: string
}

const DisplayCards = ({
  categories,
  active,
  dragged,
  activeDrag,
  displayCards,
  loading,
  chosen,
}: any) => {
  const activeCategory = categories.find(
    (cat: { id: number }) => cat.id === active
  )

  return (
    <div
      style={{
        backgroundColor: activeCategory?.bgColor,
      }}
      className={`flex max-w-[1014px] gap-[13px] p-[13px] transition-colors duration-300 ease-in-out ${
        active === 2 || active === 3
          ? "rounded-[10px]"
          : active === 4
            ? "rounded-[10px] rounded-bl-none"
            : "rounded-r-[10px] rounded-b-[10px]"
      } `}
    >
      {loading
        ? Array.from({ length: 7 }).map((_, idx) => <SkeletonCard key={idx} />)
        : displayCards.map((item: any, idx: number) =>
            dragged?.has(item?.id) ||
            chosen?.some((c: any) => c?.id === item?.id) ? (
              <div
                key={idx}
                className="flex max-w-[130px] min-w-[130px] items-center justify-center rounded-[10px] border bg-white opacity-50 select-none"
                style={{ borderColor: activeCategory?.bgColor }}
              >
                <p>{item?.value}</p>
              </div>
            ) : (
              <Draggable
                activeDrag={activeDrag}
                key={idx}
                id={item?.id}
                className="flex max-w-[130px] min-w-[130px] items-center justify-center rounded-[10px] border bg-white"
                style={{ borderColor: activeCategory?.bgColor }}
              >
                <p>{item?.value}</p>
              </Draggable>
            )
          )}
    </div>
  )
}

export default DisplayCards
