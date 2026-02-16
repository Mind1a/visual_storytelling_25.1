"use client"

import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core"
import Categories from "./Categories"
import { categories } from "../data/categoriesData"
import { useEffect, useRef, useState } from "react"
import ChosenCards from "./ChosenCards"
import CardOutput from "./CardOutput"
import ButtonContainer from "./ButtonContainer"
import DisplayCardsLayout from "./DisplayCardsLayout"
import { Card, SentenceState } from "@/types/mainPageTypes"
import { correctSentence1 } from "../data/cardsPlaceholderData"
import { ensureCorrectValue } from "../utils/ensureCorrectValue"
import useScreenshot from "../utils/useScreenshot"

const SentencePage = () => {
  // რომელი კატეგორია აქტიური Id- ს მიხედვით
  const [active, setActive] = useState<number>(1)
  // 5 ელემენტიანი array, თავიდან არის ყველა null, მერე იმის მიხედვით თუ რას აირჩევს useri - იმ არჩეუილმა Card - მა ჩაანაცვლოს null - იმ ინდექსზე რომელზეც ჩასვა
  const [chosen, setChosen] = useState<(Card | null)[]>(() => {
    const stored = localStorage.getItem("chosen")

    if (!stored) return Array(5).fill(null)

    try {
      return JSON.parse(stored) as (Card | null)[]
    } catch {
      return Array(5).fill(null)
    }
  })
  // ის ქარდები რომელიც უკვე გამოვიყენეთ
  const [dragged, setDragged] = useState<Set<number>>(new Set())
  // კონკრეტული ქარდზე ხელი გვაქ თუ არა მოკიდებული
  const [isDragging, setIsDragging] = useState(false)
  // იმ კონკრეტული ქარდის Id, რომელზეც ხელი გვაქ მოკიდებული
  const [activeDrag, setActiveDrag] = useState<string | null>(null)
  // 0-5 მდე, ამის მიხედვით ვაჩენ რომელი კატეგორია უნდა გამოჩნდეს
  const [currentStep, setCurrentStep] = useState<number>(0)
  // ქარდები, რომლებსაც ვაიმპორტებ, strate - მჭირდება shuffle - ისთვის
  const [cards, setCards] = useState<Card[]>([])
  const [correctCards, setCorrectCards] = useState(correctSentence1)
  // უკვე არეული ქარდები
  const [shuffledGroupedCards, setShuffledGroupedCards] = useState<
    Record<string, (Card | null)[]>
  >({})
  const [history, setHistory] = useState<SentenceState[]>([])

  const [ref, takeScreenshot] = useScreenshot()
  const [amountOfSentences, setAmountOfSentences] = useState<number>(1)
  const [sentences, setSentences] = useState<SentenceState[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // ეს ფუნქცია არევს ქარდებს

  function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
  }

  // დინამიური იმპორტი რომ ქარდები თუ ძაან ბევრია/მძიმეა მარტო მაშინ ჩაიტვირთოს როცა გვჭირდება, (არვიცი რამდენად საჭიროა ამ შემთხვევაში)

  useEffect(() => {
    import("../data/cardsPlaceholderData").then((mod) => setCards(mod.cards))
  }, [])

  // ეს ფუნქცია არევს ქარდებს, დაალაგებებს ტიპების მიხედვით, შექმნის 4 arrays, სადაც თითოეულში გაეერთიანბეს მსგავს ტიპებს, თუ ამ გაერთიანებულ array - ში 7 -ზე ცოტა ელემნტი იქნება, ხელოვნურად შევავსე 7 -მდე, რო დიზაინზე გამოჩნდეს ცარიელი div - ები

  const shuffle = () => {
    if (cards.length === 0) return

    // ქარდები დავაჯგუფოთ type - ს მიხედვით
    const groups: Record<string, Card[]> = {}
    cards.forEach((card) => {
      if (!groups[card.type]) groups[card.type] = []
      groups[card.type].push(card)
    })

    // საბოლოო ჯგუფი შევქმნათ, თუ არაა 7 ელემენტი შევავსოთ ცარიელით
    const finalGroups: Record<string, (Card | null)[]> = {}

    const types: ("noun" | "case" | "verb" | "postposition")[] = [
      "noun",
      "case",
      "verb",
      "postposition",
    ]

    types.forEach((type) => {
      // კონკრეტული ტიპის ქარდების ჯგუფი
      const existing = groups[type] ?? []

      // შევამოწმოთ არსებობს თუ არა ამ array - ში სწორი ქარდები
      let arr = ensureCorrectValue(existing, correctSentence1, type, 7)

      // ავრიოთ მარტო ელემენტები, არა ცარიელები
      const realCards = arr.filter(Boolean) as Card[]
      const shuffled = shuffleArray(realCards)

      // ცარიელი ქარდები
      const emptySlots = Array(7 - shuffled.length).fill(null)
      finalGroups[type] = [...shuffled, ...emptySlots].slice(0, 7)
    })

    setShuffledGroupedCards(finalGroups)
  }
  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem("chosen", JSON.stringify(chosen))
    } catch (error) {
      console.error("error setting localStorage", error)
    }
  }, [chosen])

  useEffect(() => {
    if (!cards.length) return
    if (history.length > 0) return
    shuffle()
  }, [cards])

  const typeMap: Record<number, "noun" | "case" | "verb" | "postposition"> = {
    1: "noun",
    2: "case",
    3: "postposition",
    4: "verb",
  }

  // უკვე არეული ქარდები, რომლებიც უნდა გამოჩნდეს

  const displayCards = shuffledGroupedCards[typeMap[active]] || []

  const activeCard =
    displayCards.find((card) => card?.id === activeDrag) ?? null

  // ქარდს, თუ არასწორად მივიტანთ რო ჩავსვათ, უკან ეგრევე რო არ გადახტეს, და ნელა დაბრუნდეს
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

  // currentStep - ის მიხედვით რომ შევცვალოთ რომელი კატეგორიაა აქტიური
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

  // refresh - მა გაასუფთავოს უკვე გამოყენებული ქარდების სეტი, და თავიდან დააგენერიროს არჩეული ქარდების null - ერრეი, ასევე currentStep - 0-ზე
  const refreshSteps = () => {
    setCurrentStep(0)
    setDragged(new Set())
    setChosen(Array(5).fill(null))
  }

  // ეს აწყყობს წინადადებას ინპუთში, თუ ბრუნვის ნიშანია ტირეთი გამოყოს, და არსებით სახელებს ბოლო ასო ჩამოაჭრას რო გამოჩნდეს მაგალითად მაიმუნ - ს/ი და არა მაიმუნი - ი/ს

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

  // DND - ის ბიბლიოთეკიდან, აქ იმას ვშვები რო მარტო კონკრეტულ div - ებში შეგვეძლოს ქარდების ჩაყრა, რომელი ქარდია უკვე გამოყენებული და არჩეული, იმის მერე რაც ქარდს უკვე ჩავსვამთ მერე გაზარდოს currentStep - ი

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

  const nextSentence = () => {
    setHistory((prev) => [
      ...prev,
      { shuffled: shuffledGroupedCards, chosen: chosen },
    ])
    setCurrentStep(0)

    setDragged(new Set())
    setChosen(Array(5).fill(null))
    shuffle()

    setAmountOfSentences((prev) => {
      if (prev === 5) {
        return prev
      } else return prev + 1
    })
  }

  const prevSentence = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev

      const newHistory = [...prev]
      const lastSentence = newHistory.pop()!

      setShuffledGroupedCards(lastSentence.shuffled)
      setChosen(lastSentence.chosen)
      const restoredDragged = new Set(
        lastSentence.chosen.filter(Boolean).map((card) => card!.id as any)
      )

      setDragged(restoredDragged)

      return newHistory
    })

    setCurrentStep(0)

    setAmountOfSentences((prev) => (prev === 1 ? prev : prev - 1))
  }

  return (
    <DndContext
      onDragEnd={(event) => {
        handleDragEnd(event)
        setIsDragging(false)
        setActiveDrag(null)
      }}
      // აქტიური ქარდი რომელია აქ ვიღებთ მაგის id - ს
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
          amountOfSentences={amountOfSentences}
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
