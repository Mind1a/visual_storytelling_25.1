import { Card } from "@/types/mainPageTypes"

type Props = {
  buildSentence: (chosen: (Card | null)[]) => string
  chosen: (Card | null)[]
}

const CardOutput = ({ buildSentence, chosen }: Props) => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1366px] justify-center [@media(max-width:1068px)]:mx-auto">
      <div className="mx-auto w-full max-w-[600px] [@media(max-width:1068px)]:max-w-[356px]">
        <input
          id="1"
          type="text"
          readOnly
          value={buildSentence(chosen)}
          placeholder="თქვენი წინადადება"
          className="w-full rounded-[10px] border-[3px] border-[#A4BEF3] text-center font-[BPG-Nino-Mxedruli] text-[24px] leading-[32px] font-normal text-[#583933] [@media(max-width:1068px)]:hidden"
        />
        <input
          id="2"
          type="text"
          readOnly
          value="მაიმუნ-ი ბანან-ს ჭამს"
          className="border-[#A4BEF3] text-center font-[BPG-Nino-Mxedruli] text-[24px] leading-[32px] text-[#583933] [@media(max-width:1068px)]:border-b [@media(max-width:1068px)]:border-dashed [@media(max-width:1068px)]:px-8 [@media(min-width:1068px)]:hidden"
        />
      </div>
    </div>
  )
}

export default CardOutput
