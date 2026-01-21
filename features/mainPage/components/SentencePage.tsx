"use client"

import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core"
import Categories from "./Categories"
import { categories } from "../data/categoriesData"
import { useEffect, useState } from "react"
import ChosenCards from "./ChosenCards"
import CardOutput from "./CardOutput"
import ButtonContainer from "./ButtonContainer"
import DisplayCardsLayout from "./DisplayCardsLayout"
import { Card } from "@/types/mainPageTypes"

const SentencePage = () => {
  const [active, setActive] = useState<number>(1)
  const [chosen, setChosen] = useState<(Card | null)[]>(Array(5).fill(null))
  const [dragged, setDragged] = useState<Set<number>>(new Set())
  const [isDragging, setIsDragging] = useState(false)
  const [activeDrag, setActiveDrag] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [cards, setCards] = useState<Card[]>([])
  const [shuffledGroupedCards, setShuffledGroupedCards] = useState<
    Record<string, (Card | null)[]>
  >({})

  function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    import("../data/cardsPlaceholderData").then((mod) => setCards(mod.cards))
  }, [])

  useEffect(() => {
    if (cards.length === 0) return

    const groups: Record<string, Card[]> = {}
    cards.forEach((card) => {
      if (!groups[card.type]) groups[card.type] = []
      groups[card.type].push(card)
    })

    const finalGroups: Record<string, (Card | null)[]> = {}
    Object.keys(groups).forEach((type) => {
      const shuffled = shuffleArray(groups[type]).slice(0, 7)
      const emptySlots = Array(7 - shuffled.length).fill(null)
      finalGroups[type] = [...shuffled, ...emptySlots]
    })

    setShuffledGroupedCards(finalGroups)
  }, [cards])

  const typeMap: Record<number, "noun" | "case" | "verb" | "postposition"> = {
    1: "noun",
    2: "case",
    3: "postposition",
    4: "verb",
  }

  const displayCards = shuffledGroupedCards[typeMap[active]] || []

  const activeCard = cards.find((card) => card.id === activeDrag)

  const dropAnimation = {
    duration: 300,
    easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  }

  useEffect(() => {
    switch (currentStep) {
      case 0:
        setActive(1)
        break
      case 1:
        setActive(2)
        break
      case 2:
        setActive(1)
        break
      case 3:
        setActive(2)
        break
      case 4:
        setActive(4)
        break

      default:
        break
    }
  }, [currentStep])

  const refreshSteps = () => {
    setCurrentStep(0)
    setDragged(new Set())
    setChosen(Array(5).fill(null))
  }

  const buildSentence = (chosen: (Card | null)[]) => {
    return chosen
      .map((card) => {
        if (!card) return ""

        return card.type === "case"
          ? `-${card.value}`
          : card.type === "noun"
            ? card.value.slice(0, -1)
            : card.value
      })
      .filter(Boolean)
      .join(" ")
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    if (over.id.toString().startsWith("slot-")) {
      const index = Number(over.id.toString().split("-")[1])
      if (index !== currentStep) return
      const droppedCard = displayCards.find((c) => c?.id === active.id) ?? null
      if (!droppedCard) return

      setChosen((prev) => {
        const copy = [...prev]
        copy[index] = droppedCard
        return copy
      })
      setDragged((prev) => new Set(prev).add(active.id as number))
      setCurrentStep((prev) => prev + 1)
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
        setActiveDrag(e.active.id as string)
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
            displayCards={displayCards}
          />
        </div>

        <ChosenCards
          chosen={chosen}
          isDragging={isDragging}
          currentStep={currentStep}
          activeCard={activeCard}
        />
        <CardOutput buildSentence={buildSentence} chosen={chosen} />
        <ButtonContainer refreshSteps={refreshSteps} />
      </div>
      <DragOverlay dropAnimation={dropAnimation}>
        {activeDrag ? (
          <div className="flex min-h-[170px] min-w-[130px] items-center justify-center rounded-[10px] border bg-white max-lg:min-h-[100px] max-lg:min-w-[100px]">
            {activeCard?.value}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

export default SentencePage
