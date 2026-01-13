import Link from "next/link"

const MainSuccessPage = () => {
  return (
    <div className="flex min-h-full min-w-full justify-center">
      <div className="relative w-full max-w-[1366px] max-[1066px]:px-8">
        <div className="mt-[194px] mb-[235px] flex flex-col justify-center text-center font-[400] max-[1066px]:mt-[222px] max-[1066px]:mb-[173px]">
          <span className="font-[FiraGO-Regular] text-[40px] leading-[52px] text-[#F9958F] max-[1066px]:text-[27px] max-[1066px]:leading-[41px]">
            გილოცავ!
          </span>
          <span className="font-[FiraGO-Regular] text-[40px] leading-[52px] text-[#F9958F] max-[1066px]:text-[27px] max-[1066px]:leading-[41px]">
            ამ კატეგორიაში ყველა
          </span>
          <span className="font-[FiraGO-Regular] text-[40px] leading-[52px] text-[#F9958F] max-[1066px]:text-[27px] max-[1066px]:leading-[41px]">
            წინადადება ამოწურე
          </span>
          <Link
            href="/ideas"
            className="mx-auto mt-[59px] max-w-[385px] min-w-[385px] cursor-pointer rounded-[10px] bg-[#73C9C1] pt-[15px] pb-[10px] font-[BPG-Nino-Mtavruli] text-[16px] leading-[160%] text-white max-[1066px]:mt-[171px] max-[1066px]:min-w-[326px]"
          >
            თავიდან დაწყება
          </Link>
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/Pencil-writing.png"
            alt="shape"
            className="absolute top-[28px] left-[49px] max-[1066px]:top-0 max-[1066px]:left-0 max-[1066px]:h-[120px] max-[1066px]:w-[146px]"
          />
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/broken-pencil.png"
            alt="shape"
            className="absolute top-[48px] right-[72.59px] max-[1066px]:top-[85px] max-[1066px]:right-[19px] max-[1066px]:h-[97px] max-[1066px]:w-[97px]"
          />
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/successIconBlue.svg"
            alt="shape"
            className="absolute top-[186px] left-[371px] max-[1066px]:top-[222px] max-[1066px]:left-[75px] max-[1066px]:h-[30px] max-[1066px]:w-[30px]"
          />
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/successStarBlue.svg"
            alt="shape"
            className="absolute top-[164px] left-[458px] max-[1066px]:top-[165px] max-[1066px]:left-[32px] max-[1066px]:h-[47px] max-[1066px]:w-[47px]"
          />
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/successIconRed.svg"
            alt="shape"
            className="absolute right-[402px] bottom-[296px] max-[1066px]:right-[82px] max-[1066px]:bottom-[312px] max-[1066px]:h-[31px] max-[1066px]:w-[31px]"
          />
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/successStarYellow.svg"
            alt="shape"
            className="absolute top-[261px] right-[338.83px] max-[1066px]:top-[349px] max-[1066px]:right-[22px] max-[1066px]:h-[56px] max-[1066px]:w-[56px]"
          />
        </div>

        <div>
          <img
            aria-hidden="true"
            src="/images/intersect.png"
            alt="shape"
            className="absolute bottom-0 left-0 max-[1066px]:h-[123px] max-[1066px]:w-[116px]"
          />
        </div>
        <div>
          <img
            aria-hidden="true"
            src="/images/Polygon-1.png"
            alt="shape"
            className="absolute right-0 bottom-0 max-[1066px]:h-[123px] max-[1066px]:w-[124px]"
          />
        </div>
      </div>
    </div>
  )
}

export default MainSuccessPage
