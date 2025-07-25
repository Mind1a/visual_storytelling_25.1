"use client"

import { useRouter } from "next/navigation";

export const Landing = () => {
    const router = useRouter();

  const handleClick = () => {
    router.push("/home"); 
  };
  return (
    <div className="flex flex-col justify-center items-center gap-12 md:mt-[67px] md:mb-[47px] px-[33px] min-h-screen md:min-h-auto">
        <h1 className="font-[FiraGO-Regular] text-[#583933] text-2xl md:text-5xl text-center tracking-[3.36px] md:tracking-[6.72px]">ვიზუალური თხრობა</h1>
        <iframe 
        className="w-full md:w-[798px] h-[219px] md:h-[449px]"
        src="https://www.youtube.com/embed/fVWUipoWnf8" 
        title="როგორ გაზარდა ფიტნეს ტრენერმა აუდიტორია 100-დან 40 000 ადამიანამდე -  ნინო ჩერქეზიშვილი, ჩერი" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
        <button 
        onClick={handleClick} 
        className="bg-[#F5B3A3] p-2.5 rounded-[10px] w-full md:w-[185px] max-w-[325px] font-[BPG-Nino-Mtavruli] font-bold text-white cursor-pointer">გაგრძელება</button>
    </div>
  )
}

