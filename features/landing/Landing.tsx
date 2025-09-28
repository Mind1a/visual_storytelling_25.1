"use client"

import { useRouter } from "next/navigation"

export const Landing = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/ideas")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-12 px-[33px] md:mx-auto md:max-w-[798px] md:gap-0">
      {/* Heading */}
      <h1 className="mt-8 text-center font-[FiraGO-Regular] text-2xl tracking-[3.36px] text-[#583933] md:text-5xl md:tracking-[6.72px]">
        ვიზუალური თხრობა
      </h1>

      {/* Video wrapper with fixed aspect ratio */}
      <div className="relative w-full flex-1 md:mt-[66px] md:mb-[46px]">
        <video
          className="absolute top-0 left-0 h-full w-full"
          controls
          preload="none"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="mb-8 w-full max-w-[325px] cursor-pointer rounded-[10px] bg-[#F5B3A3] p-2.5 font-[BPG-Nino-Mtavruli] font-bold text-white md:w-[185px]"
      >
        გაგრძელება
      </button>
    </div>
  )
}
