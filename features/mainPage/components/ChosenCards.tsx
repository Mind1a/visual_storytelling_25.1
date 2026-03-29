"use client"

import { useState } from "react"
import { useMediaQuery } from "../utils/useMediaQuery"
import { EmblaSlide, EmblaSlider } from "./EmblaSlider"
import Droppable from "../utils/Droppable"
import { EmblaPagination } from "./EmblaPagination"
import { Card } from "@/types/mainPageTypes"

const ChosenCards = ({ chosen, isDragging, currentStep }: any) => {
  const isMobile = useMediaQuery("(max-width: 1068px )")
  const [emblaInstance, setEmblaInstance] = useState(null)
  const firstEmptyIndex = chosen.findIndex((v: string | null) => v === null)

  return (
    <div className="mt-8 bg-[#BAD8FC] [@media(max-width:1068px)]:mx-auto [@media(max-width:1068px)]:max-w-[326px] [@media(max-width:1068px)]:rounded-[16px]">
      <div className="mx-auto max-w-[1366px]">
        <div className="relative flex gap-[37px] px-[190px] py-[37px] [@media(max-width:1068px)]:px-4 [@media(max-width:1068px)]:py-3">
          {isMobile ? (
            <>
              <EmblaSlider onInit={setEmblaInstance}>
                {chosen.map((value: Card | null, i: number) => (
                  <EmblaSlide key={i}>
                    <Droppable
                      idx={i}
                      key={i}
                      id={`slot-${i}`}
                      value={value?.value}
                      className="flex h-[130px] w-[130px] items-center justify-center rounded-[10px] border-4 bg-white max-lg:h-[100px] max-lg:w-[100px]"
                      isHighlighted={isDragging && i === firstEmptyIndex}
                    ></Droppable>
                  </EmblaSlide>
                ))}
              </EmblaSlider>
              <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2">
                <EmblaPagination embla={emblaInstance} />
              </div>
            </>
          ) : (
            chosen.map((value: Card | null, i: number) => {
              if (i === currentStep) {
                return (
                  <Droppable
                    idx={i}
                    key={i}
                    id={`slot-${i}`}
                    value={value?.value}
                    className={`flex min-h-[168px] min-w-[168px] items-center justify-center rounded-lg border-[5px] border-solid [@media(max-width:1068px)]:min-h-[112px] [@media(max-width:1068px)]:min-w-[112px] [@media(max-width:1068px)]:bg-white`}
                    isHighlighted={isDragging && i === currentStep}
                  />
                )
              } else if (i !== currentStep || value) {
                return (
                  <div
                    key={i}
                    style={{
                      border: `5px solid ${
                        i === 0 || i === 2
                          ? "#A4BEF3"
                          : i === 1 || i === 3
                            ? "#F5E393"
                            : i === 4
                              ? "#F5B3A3"
                              : "transparent"
                      }`,
                    }}
                    className={`flex min-h-[168px] min-w-[168px] items-center justify-center rounded-lg border-[5px] border-solid select-none [@media(max-width:1068px)]:min-h-[112px] [@media(max-width:1068px)]:min-w-[112px] [@media(max-width:1068px)]:bg-white`}
                  >
                    {value?.value ?? "Drop here"}
                  </div>
                )
              }
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default ChosenCards
