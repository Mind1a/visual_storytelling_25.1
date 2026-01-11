const ChosenCards = () => {
  const placeHolder = [
    { id: 1, text: "Item 1", imgSrc: "random-img-1.svg" },
    { id: 2, text: "Item 2", imgSrc: "random-img-2.svg" },
    { id: 3, text: "Item 3", imgSrc: "random-img-3.svg" },
    { id: 4, text: "Item 4", imgSrc: "random-img-4.svg" },
    { id: 5, text: "Item 5", imgSrc: "random-img-5.svg" },
  ]

  return (
    <div className="mt-8 bg-[#BAD8FC]">
      <div className="mx-auto max-w-[1366px]">
        <div className="px-[190px] py-[37px] flex gap-[37px]">
          {placeHolder.map(item => (
            <div key={item.id} className="min-w-[168px] min-h-[168px] border-[5px] flex items-center border-[#F5B3A3] rounded-lg  justify-center ">
                <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChosenCards
