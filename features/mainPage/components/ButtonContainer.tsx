"use client"

import { Card } from "@/types/mainPageTypes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

type ButtonContainerProps = {
  refreshSteps: () => void
  takeScreenshot: () => Promise<void>
  nextSentence: () => void
  prevSentence: () => void
  amountOfSentences: number
  isFourWords?: boolean
}

const ButtonContainer = ({
  refreshSteps,
  takeScreenshot,
  nextSentence,
  prevSentence,
  amountOfSentences,
  isFourWords,
}: ButtonContainerProps) => {
  const [isBackDisabled, setIsBackDisabled] = useState(true)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  useEffect(() => {
    if (amountOfSentences === 1) {
      setIsBackDisabled(true)
    } else setIsBackDisabled(false)
    if (amountOfSentences === 5) {
      setIsNextDisabled(true)
    } else setIsNextDisabled(false)
  }, [amountOfSentences])

  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1366px] justify-center px-[80px]">
      <div className="flex space-x-6">
        <button
          onClick={prevSentence}
          disabled={isBackDisabled}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#A4BEF3] px-[42px] py-2.5 whitespace-nowrap text-white disabled:cursor-default disabled:opacity-50 [@media(max-width:1068px)]:px-[23px] [@media(max-width:1068px)]:py-2.5"
        >
          <Image
            width={24}
            height={24}
            alt="arrow"
            src="/icons/whiteArrowLeft.svg"
            className="min-h-6 min-w-6"
          />

          <span className="mt-1.5 flex items-center font-[BPG-Nino-Mtavruli] text-[16px] [@media(max-width:1068px)]:hidden">
            უკან
          </span>
        </button>

        <div
          onClick={() => refreshSteps()}
          className="flex cursor-pointer items-center justify-center rounded-[10px] bg-[#F5B3A3] px-[29px] py-3 [@media(max-width:1068px)]:px-7 [@media(max-width:1068px)]:py-[14px]"
        >
          <img
            src="/icons/refreshIcon.svg"
            alt="refresh"
            className="max-w-[72px]"
          />
        </div>

        <div
          className="flex items-center justify-center rounded-[10px] bg-[#F5E393] px-[29px] py-3 [@media(max-width:1068px)]:px-6"
          onClick={() => takeScreenshot()}
        >
          <img
            src="/icons/screenshotIcon.svg"
            alt="take photo"
            className="max-w-[72px] cursor-pointer rounded-[10px]"
          />
        </div>
        {isNextDisabled ? (
          <Link
            href="/success"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#73C9C1] px-[36px] py-2.5 font-[BPG-Nino-Mtavruli] text-[16px] text-white disabled:cursor-default disabled:opacity-50 [@media(max-width:1068px)]:hidden [@media(max-width:1068px)]:px-[23px] [@media(max-width:1068px)]:py-2.5"
          >
            დასრულება
          </Link>
        ) : (
          <button
            onClick={nextSentence}
            disabled={isNextDisabled}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#73C9C1] px-[36px] py-2.5 disabled:cursor-default disabled:opacity-50 [@media(max-width:1068px)]:px-[23px] [@media(max-width:1068px)]:py-2.5"
          >
            <span className="flex items-center font-[BPG-Nino-Mtavruli] text-[16px] text-white [@media(max-width:1068px)]:hidden">
              შემდეგი
            </span>
            <div className="block">
              <Image
                width={24}
                height={24}
                alt="arrow"
                src="/icons/whiteArrowRight.svg"
                className="min-h-6 min-w-6"
              />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default ButtonContainer
