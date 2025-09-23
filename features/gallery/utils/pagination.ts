import { PaginationToken } from "@/types"

export function getPaginationRange(
  current: number,
  total: number
): PaginationToken[] {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1)

  const range: PaginationToken[] = []

  if (current <= 2) {
    if (current === 1) return [1, 2, 3, "ELLIPSIS", total]
    // current === 2 → 1, 2, 3, …, last
    return [1, 2, 3, "ELLIPSIS", total]
  }

  // End (no left ellipsis, just show the last block)
  if (current >= total - 1) {
    const start = Math.max(total - 3, 1)
    for (let i = start; i <= total; i++) range.push(i)
    return range
  }

  // Middle
  range.push(current - 1, current, current + 1, "ELLIPSIS", total)
  return range
}
