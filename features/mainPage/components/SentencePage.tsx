"use client"

import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core"
import Categories from "./Categories"
import { categories } from "../data/categoriesData"
import { useState } from "react"
import ChosenCards from "./ChosenCards"
import CardOutput from "./CardOutput"
import ButtonContainer from "./ButtonContainer"
import DisplayCardsLayout from "./DisplayCardsLayout"

const SentencePage = () => {
  const [active, setActive] = useState<number>(1)
  const [chosen, setChosen] = useState<(string | null)[]>(Array(5).fill(null))
  const [dragged, setDragged] = useState<Set<number>>(new Set())
  const [isDragging, setIsDragging] = useState(false)
  const [activeDrag, setActiveDrag] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState<number>(0)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    if (over.id.toString().startsWith("slot-")) {
      const index = Number(over.id.toString().split("-")[1])
      if (index !== currentStep) return

      setChosen((prev) => {
        const copy = [...prev]
        copy[index] = active.id as string
        return copy
      })
      setDragged((prev) => new Set(prev).add(active.id as number))
      setCurrentStep(prev => prev + 1)
    }
  }

  return (
    <DndContext
      onDragEnd={(event) => {
        handleDragEnd(event)
        setIsDragging(false)
        setActiveDrag(null)
        
      }}
      onDragStart={(e) => {
        setIsDragging(true)
        setActiveDrag(e.active.id as number)
      }}
    >
      <div className="my-8 flex w-full min-w-[1206px] flex-col [@media(max-width:1068px)]:min-w-0">
        <div className="mx-auto flex gap-[11px] px-[80px] [@media(max-width:1068px)]:mx-0 [@media(max-width:1068px)]:min-w-0 [@media(max-width:1068px)]:flex-col [@media(max-width:1068px)]:items-center [@media(max-width:1068px)]:px-8 [@media(max-width:1358px)]:px-[40px]">
          <Categories
            categories={categories}
            active={active}
            setActive={setActive}
          />
          <DisplayCardsLayout
            categories={categories}
            active={active}
            setActive={setActive}
            dragged={dragged}
            activeDrag={activeDrag}
            isDragging={isDragging}
          />
        </div>

        <ChosenCards
          chosen={chosen}
          isDragging={isDragging}
          currentStep={currentStep}
        />
        <CardOutput />
        <ButtonContainer />
      </div>
      <DragOverlay>
        {activeDrag ? (
          <div className="flex min-h-[170px] min-w-[130px] items-center justify-center rounded-[10px] border bg-white max-lg:min-h-[100px] max-lg:min-w-[100px]">
            Item {activeDrag}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

export default SentencePage
