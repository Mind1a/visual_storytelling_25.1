import React from "react"
import Image from "next/image"
import searchIcon from "@/features/gallery/assets/icons/search.svg"
import { galleryFilters } from "@/features/gallery/data"
import { SearchFilterProps } from "@/types"

function SearchFilter({
  searchValue,
  setSearchValue,
  selectedFilters,
  handleCheckboxChange,
}: SearchFilterProps) {
  return (
    <div className="w-full space-y-4 sm:w-[181px]">
      <div className="relative w-full rounded-[10px] border-[2px] border-[#a8a8a8] px-1 py-2">
        <Image
          src={searchIcon}
          width={15}
          height={15}
          alt="search"
          className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform"
        />
        <input
          type="text"
          placeholder="ძიება"
          className="ml-7 w-9/10 outline-none"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <div className="space-y-2 sm:space-y-4">
        {galleryFilters.map((item, idx) => (
          <div
            key={idx}
            className={`flex h-[44px] w-full items-center rounded-[10px] ${item.color} p-[10px]`}
          >
            <input
              type="checkbox"
              className="relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-[5px] border border-[#7f7f7f80] bg-white after:absolute after:top-1/2 after:left-1/2 after:h-[16px] after:w-[16px] after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] checked:bg-[#EBEDEF] checked:after:bg-[url('/icons/checkedIcon.svg')] checked:after:bg-contain checked:after:bg-center checked:after:bg-no-repeat"
              checked={selectedFilters.includes(item.type)}
              onChange={() => handleCheckboxChange(item.type)}
            />
            <span className="ml-[5px] text-[14px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter
