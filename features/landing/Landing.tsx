"use client"

import { useRouter } from "next/navigation"

export const Landing = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/ideas")
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 px-[33px] md:gap-0">
      <h1 className="mt-8 text-center font-[FiraGO-Regular] text-2xl tracking-[3.36px] text-[#583933] md:text-5xl md:tracking-[6.72px]">
        ვიზუალური თხრობა
      </h1>
      <div className="h-full w-full md:mt-[66px] md:mb-[46px] md:w-[798px]">
        <iframe
          className="h-full min-h-[219px] w-full md:min-h-[449px]"
          src="https://www.youtube.com/embed/fVWUipoWnf8"
          title="როგორ გაზარდა ფიტნეს ტრენერმა აუდიტორია 100-დან 40 000 ადამიანამდე -  ნინო ჩერქეზიშვილი, ჩერი"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <button
        onClick={handleClick}
        className="mb-8 w-full max-w-[325px] cursor-pointer rounded-[10px] bg-[#F5B3A3] p-2.5 font-[BPG-Nino-Mtavruli] font-bold text-white md:w-[185px]"
      >
        გაგრძელება
      </button>
    </div>
  )
}
