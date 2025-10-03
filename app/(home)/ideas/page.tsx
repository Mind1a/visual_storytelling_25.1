"use client"

import IdeasButtons from "@/features/common/components/IdeasButtons"
import IdeasCards from "@/features/common/components/IdeasCards"
import IdeasStartButton from "@/features/common/components/IdeasStartButton"
import { useState } from "react"

export default function IdeasPage() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

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
    setSelectedButton(null)
    setSelectedCard(null)
    alert("Start the game!")
  }

  return (
    <div className="mt-[53px] mb-22 font-[BPG-Nino-Mtavruli] md:mt-[70px]">
      {/* Buttons */}
      <IdeasButtons selected={selectedButton} onSelect={setSelectedButton} />
      {/* Main cards */}
      <IdeasCards selected={selectedCard} onSelect={setSelectedCard} />
      {/* Start */}
      <IdeasStartButton handleStart={handleStart} error={error} />
    </div>
  )
}
