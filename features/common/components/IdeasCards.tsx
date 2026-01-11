import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
const IdeasCards = ({
  selected,
  onSelect,
}: {
  selected: number | null
  onSelect: Dispatch<SetStateAction<number | null>>
}) => {
  const cardsData = [
    { id: 1, imageSrc: "/images/gallery/professions.svg", title: "პროფესიები" },
    { id: 2, imageSrc: "/images/gallery/family.svg", title: "ოჯახი" },
    { id: 3, imageSrc: "/images/gallery/animals.svg", title: "ცხოველები" },
    { id: 4, imageSrc: "/images/gallery/birds.svg", title: "ფრინველები" },
    { id: 5, imageSrc: "/images/gallery/plants.svg", title: "მცენარეები" },
    { id: 6, imageSrc: "/images/gallery/items.svg", title: "საგნები" },
  ]
  return (
    <div className="mb-[70px] bg-[#BAD8FC] px-[33px] py-[23px] md:px-20 md:py-11">
      <div className="mx-auto grid max-w-[1206px] grid-cols-3 gap-x-[23px] gap-y-[31px] md:grid-cols-4 lg:grid-cols-6">
        {cardsData.map((item) => {
          const isActive = selected === item.id
          return (
            <div
              onClick={() => onSelect(item.id)}
              key={item.id}
              className="flex cursor-pointer flex-col items-center gap-1"
            >
              <div
                className={`flex items-center justify-center rounded-[10px] border-4 ${isActive ? "border-[#4E84F1]" : "border-[#A4BEF3]"} bg-white px-[7px] py-[15px] transition-shadow hover:shadow-[0_4px_12px_0_rgba(10,10,10,0.40)] lg:px-[22px] lg:py-[36px]`}
              >
                <Image
                  src={item.imageSrc}
                  alt="professions"
                  width={68}
                  height={64}
                  className="lg:w-[134px]"
                />
              </div>
              <h3 className="font-[DejaVu-Sans] text-[#583933]">
                {item.title}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IdeasCards
