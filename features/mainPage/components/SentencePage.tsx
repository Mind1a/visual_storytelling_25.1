"use client"

import Categories from "./Categories"
import { categories } from "../data/categoriesData"
import { useState } from "react"
import ChosenCards from "./ChosenCards"
import CardOutput from "./CardOutput"
import ButtonContainer from "./ButtonContainer"
import DisplayCardsLayout from "./DisplayCardsLayout"

const SentencePage = () => {
  const [active, setActive] = useState<number>(1)
  return (
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
        />
      </div>

      <ChosenCards />
      <CardOutput />
      <ButtonContainer />
    </div>
  )
}

export default SentencePage
