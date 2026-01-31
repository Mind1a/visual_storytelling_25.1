export const SkeletonCard = () => (
  <div className="relative flex h-[170px] max-w-[130px] min-w-[130px] animate-pulse overflow-hidden rounded-[10px] border bg-gray-200">
    <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  </div>
)

export default SkeletonCard
