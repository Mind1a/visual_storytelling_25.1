"use client"

import Image from "next/image"

import type { CategoriesProps } from "@/types/mainPageTypes"

const Categories = ({ categories, active, setActive }: CategoriesProps) => {
  // {
  //     id: 1,
  //     icon: "icons/nounIcon.svg",
  //     text: "არსებითი სახელი",
  //     bgColor: "#A4BEF3"
  //   },

  return (
    <div>
      <div className="flex flex-col gap-3 [@media(max-width:1068px)]:flex-row">
        {categories.map((categorie) => (
          <div
            key={categorie.id}
            className="relative flex items-center gap-3 [@media(max-width:1068px)]:flex-col [@media(max-width:1068px)]:gap-1"
          >
            <div
              onClick={() => setActive(categorie.id)}
              style={{ backgroundColor: categorie.bgColor }}
              className={`relative z-20 flex h-10 w-10 transform cursor-pointer items-center justify-center rounded-full transition-transform duration-300 [@media(max-width:1068px)]:z-0 ${categorie.id === active && "[@media(max-width:1068px)]:scale-x-[1.489] [@media(max-width:1068px)]:scale-y-[1.447]"}`}
            >
              <Image
                src={categorie.icon}
                width={24}
                height={24}
                alt={categorie.text}
              />
            </div>
            <span
              className={`mb-[22px] flex w-[85px] max-w-[70px] items-center justify-center text-center font-[BPG-Nino-Mxedruli] text-[12px] text-[#583933] [@media(min-width:1068px)]:hidden ${categorie.id === active && "mt-2 text-[14px]"}`}
            >
              {categorie.text}
            </span>

            <div
              onClick={() => setActive(categorie.id)}
              style={
                {
                  backgroundColor: categorie.bgColor,
                  "--shadow-color": categorie.bgColor,
                } as React.CSSProperties
              }
              className={`relative -ml-3 flex h-10 cursor-pointer items-center rounded-r-2xl pr-5 pl-8 ${active === categorie.id && "!rounded-tr-none !rounded-br-none [box-shadow:12px_0_0_0_var(--shadow-color)]"} transition-[box-shadow,border-radius] [@media(max-width:1068px)]:hidden`}
            >
              <div className="absolute top-0 left-0 h-full w-5 -translate-x-1/2 rounded-[100%] bg-white [@media(max-width:1068px)]:hidden" />

              <span className="flex w-[85px] items-center justify-center font-[BPG-Nino-Mxedruli] text-[10px] text-[#583933] [@media(max-width:1068px)]:hidden">
                {categorie.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
