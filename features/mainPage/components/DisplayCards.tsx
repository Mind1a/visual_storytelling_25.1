import type { CategoriesProps } from "@/types/mainPageTypes"
export type PlaceholderDataType = {
  id: number
  text: string
  imgSrc: string
}

const DisplayCards = ({ categories, active, setActive }: CategoriesProps) => {
  const activeCategory = categories.find((cat) => cat.id === active)

  const placeHolderData: PlaceholderDataType[] = [
    { id: 1, text: "Item 1", imgSrc: "random-img-1.svg" },
    { id: 2, text: "Item 2", imgSrc: "random-img-2.svg" },
    { id: 3, text: "Item 3", imgSrc: "random-img-3.svg" },
    { id: 4, text: "Item 4", imgSrc: "random-img-4.svg" },
    { id: 5, text: "Item 5", imgSrc: "random-img-5.svg" },
    { id: 6, text: "Item 6", imgSrc: "random-img-6.svg" },
    { id: 7, text: "Item 7", imgSrc: "random-img-7.svg" },
  ]

  return (
    <div
      style={{
        backgroundColor: activeCategory?.bgColor,
      }}
      className={`flex max-w-[1014px] gap-[13px] p-[13px] transition-colors duration-300 ease-in-out ${
        active === 2 || active === 3
          ? "rounded-[10px]"
          : active === 4
            ? "rounded-[10px] rounded-bl-none"
            : "rounded-r-[10px] rounded-b-[10px]"
      } `}
    >
      {placeHolderData.map((item) => (
        <div
          style={{
            borderColor: activeCategory?.bgColor,
          }}
          key={item.id}
          className="flex h-full w-full max-w-[130px] min-w-[130px] items-center justify-center rounded-[10px] border bg-white"
        >
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default DisplayCards
