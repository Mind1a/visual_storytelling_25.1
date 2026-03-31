"use client"

import IdeasButtons from "@/features/common/components/IdeasButtons"
import IdeasCards from "@/features/common/components/IdeasCards"
import IdeasStartButton from "@/features/common/components/IdeasStartButton"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function IdeasPage() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const categoryMap: Record<number, string> = {
    1: "პროფესიები",
    2: "ოჯახი",
    3: "ცხოველები",
    4: "ფრინველები",
    5: "მცენარეები",
    6: "საგნები",
  }

  const handleStart = () => {
    if (!selectedButton) {
      setError("გთხოვთ აირჩიოთ ღილაკი")
      return
    }

    if (!selectedCard) {
      setError("გთხოვთ აირჩიოთ ბარათი")
      return
    }
    setError(null)

    const category = categoryMap[selectedCard]

    const route = selectedButton === "3" ? "/threeWord" : "/fourWord"

    router.push(`${route}?category=${encodeURIComponent(category)}`)

    setSelectedButton(null)
    setSelectedCard(null)
  }

  return (
    <div className="mt-[53px] font-[BPG-Nino-Mtavruli] md:mt-[70px]">
      {/* Buttons */}
      <IdeasButtons selected={selectedButton} onSelect={setSelectedButton} />
      {/* Main cards */}
      <IdeasCards selected={selectedCard} onSelect={setSelectedCard} />
      {/* Start */}
      <IdeasStartButton handleStart={handleStart} error={error} />
    </div>
  )
}
