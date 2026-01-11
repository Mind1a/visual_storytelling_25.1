"use client"

import Categories from "./Categories"
import DisplayCards from "./DisplayCards"
import { categories } from "../data/categoriesData"
import { useState } from "react"
import ChosenCards from "./ChosenCards"
import CardOutput from "./CardOutput"
import ButtonContainer from "./ButtonContainer"

const SentencePage = () => {
  const [active, setActive] = useState<number>(1)
  return (
    <div className="my-8 flex w-full min-w-[1206px] flex-col">
      <div className="mx-auto flex gap-[11px] px-[80px]">
        <Categories
          categories={categories}
          active={active}
          setActive={setActive}
        />
        <DisplayCards
          categories={categories}
          active={active}
          setActive={setActive}
        />
      </div>

      <ChosenCards />
      <CardOutput />
      <ButtonContainer />
    </div>
  )
}

export default SentencePage
