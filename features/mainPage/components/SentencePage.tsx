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
import { Card, SentenceState } from "@/types/mainPageTypes"
import { correctSentence1 } from "../data/cardsPlaceholderData"
import { ensureCorrectValue } from "../utils/ensureCorrectValue"
import useScreenshot from "../utils/useScreenshot"

const SentencePage = () => {
  const [active, setActive] = useState<number>(1)
  const [dragged, setDragged] = useState<Set<number>>(new Set())
  const [isDragging, setIsDragging] = useState(false)
  const [activeDrag, setActiveDrag] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [cards, setCards] = useState<Card[]>([])
  const [correctCards] = useState(correctSentence1)

  const emptySentence: SentenceState = {
    chosen: Array(5).fill(null),
    shuffled: {},
  }

  const [fullHistoryArray, setFullHistoryArray] = useState<SentenceState[]>([
    emptySentence,
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSentence = fullHistoryArray[currentIndex]
  const chosen = currentSentence.chosen
  const shuffledGroupedCards = currentSentence.shuffled

  const [ref, takeScreenshot] = useScreenshot()

  function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    import("../data/cardsPlaceholderData").then((mod) => {
      setCards(mod.cards)
    })
  }, [])

  const generateShuffle = () => {
    if (!cards.length) return {}

    const groups: Record<string, Card[]> = {}

    cards.forEach((card) => {
      if (!groups[card.type]) groups[card.type] = []
      groups[card.type].push(card)
    })

    const finalGroups: Record<string, (Card | null)[]> = {}

    const types: ("noun" | "case" | "verb" | "postposition")[] = [
      "noun",
      "case",
      "verb",
      "postposition",
    ]

    types.forEach((type) => {
      const existing = groups[type] ?? []
      let arr = ensureCorrectValue(existing, correctSentence1, type, 7)

      const realCards = arr.filter(Boolean) as Card[]
      const shuffled = shuffleArray(realCards)
      const emptySlots = Array(7 - shuffled.length).fill(null)

      finalGroups[type] = [...shuffled, ...emptySlots].slice(0, 7)
    })

    return finalGroups
  }

  useEffect(() => {
    if (!cards.length) return

    setFullHistoryArray((prev) => {
      const updated = [...prev]
      updated[0] = {
        ...updated[0],
        shuffled: generateShuffle(),
      }
      return updated
    })
  }, [cards])

  const typeMap: Record<number, "noun" | "case" | "verb" | "postposition"> = {
    1: "noun",
    2: "case",
    3: "postposition",
    4: "verb",
  }

  const displayCards = shuffledGroupedCards[typeMap[active]] || []

  const activeCard =
    displayCards.find((card) => card?.id === activeDrag) ?? null

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

  const refreshSteps = ()  => {
    setCurrentStep(0)
    setDragged(new Set())

    setFullHistoryArray((prev) => {
      const copy = [...prev]
      copy[currentIndex] = {
        ...copy[currentIndex],
        chosen: Array(5).fill(null),
      }
      return copy
    })
  }

  const buildSentence = (chosen: (Card | null)[]) => {
    return chosen
      .map((card) => {
        if (!card) return ""

        if (card.type === "case") {
          return `-${card.value}`
        }

        if (card.type === "noun") {
          const lastChar = card.value.at(-1)

          if (["ა", "ო", "უ", "ე"].includes(lastChar!)) {
            return card.value
          }

          if (lastChar === "ი") {
            return card.value.slice(0, -1)
          }

          return card.value
        }

        return card.value
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

      setFullHistoryArray((prev) => {
        const copy = [...prev]
        const sentenceCopy = {
          ...copy[currentIndex],
          chosen: [...copy[currentIndex].chosen],
        }

        sentenceCopy.chosen[index] = droppedCard as any
        copy[currentIndex] = sentenceCopy

        return copy
      })

      setDragged((prev) => new Set(prev).add(active.id as number))
      setCurrentStep((prev) => prev + 1)
    }
  }

  const nextSentence = () => {
    setCurrentStep(0)
    setDragged(new Set())

    setFullHistoryArray((prev) => {
      const isLast = currentIndex === prev.length - 1

      if (isLast) {
        const newSentence: SentenceState = {
          chosen: Array(5).fill(null),
          shuffled: generateShuffle(),
        }

        const updated = [...prev, newSentence]
        setCurrentIndex(prev.length)
        return updated
      } else {
        setCurrentIndex(currentIndex + 1)
        return prev
      }
    })
  }

  const prevSentence = () => {
    if (currentIndex === 0) return

    setCurrentIndex((prev) => prev - 1)
    setCurrentStep(0)
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
      <div
        className="flex w-full min-w-[1206px] flex-col py-8 [@media(max-width:1068px)]:min-w-0"
        ref={ref}
      >
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
            chosen={chosen}
          />
        </div>

        <ChosenCards
          chosen={chosen}
          isDragging={isDragging}
          currentStep={currentStep}
          activeCard={activeCard}
        />
        <CardOutput buildSentence={buildSentence} chosen={chosen} />
        <ButtonContainer
          amountOfSentences={currentIndex + 1}
          refreshSteps={refreshSteps}
          takeScreenshot={takeScreenshot}
          nextSentence={nextSentence}
          prevSentence={prevSentence}
        />
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
