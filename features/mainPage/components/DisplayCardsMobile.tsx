"use client"

import { CategoriesProps } from "@/types/mainPageTypes"
import { PlaceholderDataType } from "./DisplayCards"
import { EmblaSlide, EmblaSlider } from "./EmblaSlider"
import { useState } from "react"
import { EmblaPagination } from "./EmblaPagination"

const DisplayCardsMobile = ({
  categories,
  active,
  setActive,
}: CategoriesProps) => {
  const placeHolderData: PlaceholderDataType[] = [
    { id: 1, text: "Item 1", imgSrc: "random-img-1.svg" },
    { id: 2, text: "Item 2", imgSrc: "random-img-2.svg" },
    { id: 3, text: "Item 3", imgSrc: "random-img-3.svg" },
    { id: 4, text: "Item 4", imgSrc: "random-img-4.svg" },
    { id: 5, text: "Item 5", imgSrc: "random-img-5.svg" },
    { id: 6, text: "Item 6", imgSrc: "random-img-6.svg" },
    { id: 7, text: "Item 7", imgSrc: "random-img-7.svg" },
  ]
  const activeCategory = categories.find((cat) => cat.id === active)

  const [emblaInstance, setEmblaInstance] = useState(null)
  return (
    <div
      style={{
        backgroundColor: activeCategory?.mobielBg || activeCategory?.bgColor,
      }}
      className={`relative flex max-w-[1014px] flex-col gap-[13px] rounded-[10px] p-[13px] transition-colors duration-300 ease-in-out max-lg:max-h-[132px] max-lg:max-w-[326px] [@media(max-width:1068px)]:px-4 [@media(max-width:1068px)]:py-3`}
    >
      <EmblaSlider onInit={setEmblaInstance}>
        {placeHolderData.map((item) => (
          <EmblaSlide key={item.id}>
            <div
              style={{ borderColor: activeCategory?.bgColor }}
              className="flex h-[130px] w-[130px] items-center justify-center rounded-[10px] border bg-white max-lg:h-[100px] max-lg:w-[100px]"
            >
              <p>{item.text}</p>
            </div>
          </EmblaSlide>
        ))}
      </EmblaSlider>
      <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2">
        <EmblaPagination embla={emblaInstance} />
      </div>
    </div>
  )
}

export default DisplayCardsMobile
