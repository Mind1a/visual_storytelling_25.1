import { CategoriesProps } from "@/types/mainPageTypes"
import { useMediaQuery } from "../utils/useMediaQuery"
import DisplayCards from "./DisplayCards"
import DisplayCardsMobile from "./DisplayCardsMobile"

const DisplayCardsLayout = (props: CategoriesProps) => {
  const isMobile = useMediaQuery("(max-width: 1068px )")

  return (
    <>
      {isMobile ? (
        <DisplayCardsMobile {...props} />
      ) : (
        <DisplayCards {...props} />
      )}
    </>
  )
}

export default DisplayCardsLayout
