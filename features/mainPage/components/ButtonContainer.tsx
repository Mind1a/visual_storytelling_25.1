import Image from "next/image"

const ButtonContainer = () => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1366px] justify-center px-[80px]">
      <div className="flex space-x-6">
        <button className="flex items-center justify-center gap-2 rounded-[10px] bg-[#A4BEF3] px-[42px] py-2.5 whitespace-nowrap text-white">
          <Image
            width={24}
            height={24}
            alt="arrow"
            src="icons/whiteArrowLeft.svg"
          />
          <span className="mt-1.5 flex cursor-pointer items-center font-[BPG-Nino-Mtavruli] text-[16px]">
            უკან
          </span>
        </button>

        <div className="flex items-center justify-center rounded-[10px] bg-[#F5B3A3] px-[29px] py-3">
          <img src="icons/refreshIcon.svg" alt="" className="max-w-[72px]" />
        </div>

        <div className="flex items-center justify-center rounded-[10px] bg-[#F5E393] px-[29px] py-3">
          <img
            src="icons/screenshotIcon.svg"
            alt=""
            className="max-w-[72px] rounded-[10px]"
          />
        </div>
        <button className="flex items-center justify-center gap-2 rounded-[10px] bg-[#73C9C1] px-[36px] py-2.5 whitespace-nowrap text-white">
          <span className="mt-1.5 flex cursor-pointer items-center font-[BPG-Nino-Mtavruli] text-[16px]">
            შემდეგი
          </span>
          <Image
            width={24}
            height={24}
            alt="arrow"
            src="icons/whiteArrowRight.svg"
          />
        </button>
      </div>
    </div>
  )
}

export default ButtonContainer
