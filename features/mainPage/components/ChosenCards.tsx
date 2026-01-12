"use client"

import { useState } from "react"
import { useMediaQuery } from "../utils/useMediaQuery"
import { EmblaSlide, EmblaSlider } from "./EmblaSlider"

const ChosenCards = () => {
  const placeHolder = [
    { id: 1, text: "Item 1", imgSrc: "random-img-1.svg" },
    { id: 2, text: "Item 2", imgSrc: "random-img-2.svg" },
    { id: 3, text: "Item 3", imgSrc: "random-img-3.svg" },
    { id: 4, text: "Item 4", imgSrc: "random-img-4.svg" },
    { id: 5, text: "Item 5", imgSrc: "random-img-5.svg" },
  ]

  const isMobile = useMediaQuery("(max-width: 1068px )")
  const [emblaInstance, setEmblaInstance] = useState(null)
  return (
    <div className="mt-8 bg-[#BAD8FC] [@media(max-width:1068px)]:mx-auto [@media(max-width:1068px)]:max-w-[326px] [@media(max-width:1068px)]:rounded-[16px]">
      <div className="mx-auto max-w-[1366px]">
        <div className="flex gap-[37px] px-[190px] py-[37px] [@media(max-width:1068px)]:px-4 [@media(max-width:1068px)]:py-3">
          {isMobile ? (
            <EmblaSlider onInit={setEmblaInstance}>
              {placeHolder.map((item) => (
                <EmblaSlide key={item.id}>
                  <div className="flex h-[130px] w-[130px] items-center justify-center rounded-[10px] border bg-white max-lg:h-[100px] max-lg:w-[100px]">
                    <p>{item.text}</p>
                  </div>
                </EmblaSlide>
              ))}
            </EmblaSlider>
          ) : (
            placeHolder.map((item) => (
              <div
                key={item.id}
                className="flex min-h-[168px] min-w-[168px] items-center justify-center rounded-lg border-[5px] border-[#F5B3A3] [@media(max-width:1068px)]:min-h-[112px] [@media(max-width:1068px)]:min-w-[112px] [@media(max-width:1068px)]:bg-white"
              >
                <span>{item.text}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ChosenCards
