"use client"

import { CategoriesProps } from "@/types/mainPageTypes"
import { useMediaQuery } from "../utils/useMediaQuery"
import DisplayCards from "./DisplayCards"
import DisplayCardsMobile from "./DisplayCardsMobile"
import { useEffect, useState } from "react"

const DisplayCardsLayout = (props: any) => {
  const isMobile = useMediaQuery("(max-width: 1068px )")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])
  return (
    <>
      {isMobile ? (
        <DisplayCardsMobile {...props} />
      ) : (
        <DisplayCards {...props} loading={!ready} />
      )}
    </>
  )
}

export default DisplayCardsLayout
