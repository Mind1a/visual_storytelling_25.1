import Image from "next/image"
import brokenPencil from "@/public/images/broken-pencil.png"
import pencil from "@/public/images/Pencil-writing.png"
import intersect from "@/public/images/Intersect.png"
import polygon from "@/public/images/Polygon-1.png"

const CommonPage = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="relative mt-[62px] flex min-h-[100%] flex-col md:mt-[170px] md:min-h-auto">
      <div className="relative mx-auto w-full max-w-[1366px]">
        <div className="relative flex max-w-[1000px] flex-col gap-8 px-8 pb-[279px] md:mx-auto md:items-center">
          <h2 className="font-[BPG-Nino-Mtavruli] text-2xl font-bold tracking-[0.32px] md:text-[32px]">
            {title}
          </h2>
          <p className="font-[BPG-Nino-Mkhedruli] text-lg tracking-[0.18px] lg:text-justify">
            {description}
          </p>
          <Image
            src={pencil}
            alt="pencil"
            className="absolute right-0 bottom-[88px] w-[146px] lg:top-[-180px] lg:left-[-134px] lg:w-[297px]"
          />
          <Image
            src={brokenPencil}
            alt="broken pencil"
            className="absolute bottom-[146px] left-0 w-[97px] lg:top-[-160px] lg:left-[830px] lg:w-[250px]"
          />
        </div>
        <Image
          src={intersect}
          alt="intersect"
          className="absolute bottom-0 left-0 w-[116px]"
        />
        <Image
          src={polygon}
          alt="polygon"
          className="absolute right-0 bottom-0 w-[86px]"
        />
      </div>
    </div>
  )
}

export default CommonPage
