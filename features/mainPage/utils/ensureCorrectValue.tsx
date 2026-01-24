import { Card, CorrectCard } from "@/types/mainPageTypes"

export function ensureCorrectValue(
  shuffled: (Card | null)[] | null | undefined,
  source: CorrectCard[]
): (Card | null)[] {
  if (!shuffled || shuffled.length === 0) return shuffled ?? []

  const targetValue = source[0]?.value
  if (!targetValue) return shuffled

  const alreadyExists = shuffled.some((card) => card?.value === targetValue)

  if (alreadyExists) return shuffled

  if (!shuffled[0]) return shuffled

  return [{ ...shuffled[0], value: targetValue }, ...shuffled.slice(1)]
}
