const IdeasStartButton = ({
  handleStart,
  error,
}: {
  handleStart: () => void
  error: string | null
}) => {
  return (
    <div className="mx-auto flex max-w-[390px] flex-col items-center justify-center px-[33px]">
      <button
        onClick={handleStart}
        className="w-full max-w-[326px] cursor-pointer rounded-[10px] bg-[#73C9C1] py-3 font-[DejaVu-Sans] lg:max-w-[181px]"
      >
        დაწყება
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

export default IdeasStartButton
