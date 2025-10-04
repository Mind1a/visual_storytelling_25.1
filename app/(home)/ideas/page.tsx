import Image from "next/image"

export default function page() {
  const cardsData = [
    { id: 1, imageSrc: "/images/gallery/professions.svg", title: "პროფესიები" },
    { id: 2, imageSrc: "/images/gallery/family.svg", title: "ოჯახი" },
    { id: 3, imageSrc: "/images/gallery/animals.svg", title: "ცხოველები" },
    { id: 4, imageSrc: "/images/gallery/birds.svg", title: "ფრინველები" },
    { id: 5, imageSrc: "/images/gallery/plants.svg", title: "მცენარეები" },
    { id: 6, imageSrc: "/images/gallery/items.svg", title: "საგნები" },
  ]

  return (
    <div className="mt-[53px] font-[BPG-Nino-Mtavruli] md:mt-[70px]">
      {/* Buttons */}
      <div className="mx-auto mb-[59px] flex max-w-[390px] items-center gap-4 px-[33px] md:mb-[42px] md:justify-between md:px-0">
        <div className="flex max-w-[155px] flex-col items-center gap-[5.32px] md:max-w-[181px]">
          <div className="flex items-center gap-[10px]">
            <Image src="/images/bulb.svg" width={25} height={25} alt="bulb" />
            <Image src="/images/bulb.svg" width={25} height={25} alt="bulb" />
            <Image src="/images/bulb.svg" width={25} height={25} alt="bulb" />
          </div>
          <button className="flex h-15 items-center gap-[9.58px] rounded-[10px] bg-[#73C9C1] pr-[18.17px] pl-[21.25px] text-left text-sm font-bold text-black">
            <span className="font-[Inter] text-[40px] font-semibold">3</span>
            სიტყვიანი წინადადება
          </button>
        </div>
        <div className="flex max-w-[155px] flex-col items-center gap-[5.32px] md:max-w-[181px]">
          <div className="flex items-center gap-[10px]">
            <Image src="/images/bulb.svg" width={25} height={25} alt="bulb" />
            <Image src="/images/bulb.svg" width={25} height={25} alt="bulb" />
            <Image src="/images/bulb.svg" width={25} height={25} alt="bulb" />
          </div>
          <button className="flex h-15 items-center gap-[9.58px] rounded-[10px] bg-[#F5B3A3] pr-[18.17px] pl-[21.25px] text-left text-sm font-bold text-black">
            <span className="font-[Inter] text-[40px] font-semibold">4</span>
            სიტყვიანი წინადადება
          </button>
        </div>
      </div>
      {/* Main cards */}
      <div className="mb-[70px] grid grid-cols-3 gap-x-[23px] gap-y-[31px] bg-[#BAD8FC] px-[33px] py-[23px] md:grid-cols-4 md:px-20 md:py-11 lg:grid-cols-6">
        {cardsData.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center rounded-[10px] border-4 border-[#A4BEF3] bg-white px-[7px] py-[15px] lg:px-[22px] lg:py-[36px]">
              <Image
                src={item.imageSrc}
                alt="professions"
                width={68}
                height={64}
                className="lg:w-[134px]"
              />
            </div>
            <h3 className="font-[DejaVu-Sans] text-[#583933]">{item.title}</h3>
          </div>
        ))}
      </div>
      {/* Start */}
      <div className="mx-auto flex max-w-[390px] items-center justify-center px-[33px]">
        <button className="w-full max-w-[326px] rounded-[10px] bg-[#73C9C1] py-3 font-[DejaVu-Sans] lg:max-w-[181px]">
          დაწყება
        </button>
      </div>
    </div>
  )
}
