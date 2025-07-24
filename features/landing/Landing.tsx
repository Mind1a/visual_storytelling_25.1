"use client"

import { useRouter } from "next/navigation";

export const Landing = () => {
    const router = useRouter();

  const handleClick = () => {
    router.push("/home"); 
  };
  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-[67px] mb-[47px] min-h-screen">
        <h1 className="text-5xl">ვიზუალური თხრობა</h1>
        <iframe width="798" height="449" src="https://www.youtube.com/embed/fVWUipoWnf8" title="როგორ გაზარდა ფიტნეს ტრენერმა აუდიტორია 100-დან 40 000 ადამიანამდე -  ნინო ჩერქეზიშვილი, ჩერი" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <button onClick={handleClick} className="bg-[#F5B3A3] p-2.5 rounded-[10px] w-[185px] text-white cursor-pointer">გაგრძელება</button>
        </div>
  )
}

