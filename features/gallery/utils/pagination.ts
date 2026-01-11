import { PaginationToken } from "@/types"

export function getPaginationRange(
  current: number,
  total: number
): PaginationToken[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)

  const range: PaginationToken[] = []

  range.push(1)

  if (current > 3) {
    range.push("ELLIPSIS")
  }

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) {
    range.push(i)
  }

  if (current < total - 2) {
    range.push("ELLIPSIS")
  }

  range.push(total)

  return range
}
