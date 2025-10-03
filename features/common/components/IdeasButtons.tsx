import { Dispatch, SetStateAction } from "react"
import Bulb from "./Bulb"

const IdeasButtons = ({
  selected,
  onSelect,
}: {
  selected: string | null
  onSelect: Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <div className="mx-auto mb-[59px] flex max-w-[390px] items-center gap-4 px-[33px] md:mb-[42px] md:justify-between md:px-0">
      {/* 3 Words */}
      <div className="flex max-w-[155px] flex-col items-center gap-[5.32px] md:max-w-[181px]">
        <div className="flex items-center gap-[10px]">
          {[...Array(3)].map((_, i) => (
            <Bulb key={i} isActive={selected === "3"} />
          ))}
        </div>
        <button
          onClick={() => onSelect("3")}
          className="flex h-15 cursor-pointer items-center gap-[9.58px] rounded-[10px] bg-[#73C9C1] pr-[18.17px] pl-[21.25px] text-left text-sm font-bold text-black transition-shadow hover:shadow-[0_4px_12px_0_rgba(10,10,10,0.40)]"
        >
          <span className="font-[Inter] text-[40px] font-semibold">3</span>
          სიტყვიანი წინადადება
        </button>
      </div>
      {/* 4 Words */}
      <div className="flex max-w-[155px] flex-col items-center gap-[5.32px] md:max-w-[181px]">
        <div className="flex items-center gap-[10px]">
          {[...Array(3)].map((_, i) => (
            <Bulb key={i} isActive={selected === "4"} />
          ))}
        </div>
        <button
          onClick={() => onSelect("4")}
          className="flex h-15 cursor-pointer items-center gap-[9.58px] rounded-[10px] bg-[#F5B3A3] pr-[18.17px] pl-[21.25px] text-left text-sm font-bold text-black transition-shadow hover:shadow-[0_4px_12px_0_rgba(10,10,10,0.40)]"
        >
          <span className="font-[Inter] text-[40px] font-semibold">4</span>
          სიტყვიანი წინადადება
        </button>
      </div>
    </div>
  )
}

export default IdeasButtons
