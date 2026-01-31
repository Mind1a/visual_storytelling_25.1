import { Card, CorrectCard } from "@/types/mainPageTypes"

export function ensureCorrectValue(
  shuffled: (Card | null)[] | null | undefined,
  correctSentence: CorrectCard[],
  type: "noun" | "case" | "verb" | "postposition",
  maxLength = 7
): (Card | null)[] {
  // ამოვიღოთ მარტო არა null - ქარდები
  let arr: (Card | null)[] = shuffled?.filter(Boolean) ?? []

  // სწორი ქარდები კონკრეტული ტიპისთვის
  const requiredOfType = correctSentence.filter((c) => c.type === type)

  // თუ არ არის სწორი ქარდი დავამატოთ,
  requiredOfType.forEach((requiredCard, idx) => {
    if (!arr.some((c) => c?.value === requiredCard.value)) {
      // ამ კონკრეტულ ინდექსში თუ უკვე არ არის სწორი ქარდი, მაშინ ამ ინდექსშივე ჩავასწოროთ,
      // თუ არის მაშინ, პირველ ელემენტად ჩავასწოროთ
      if (arr[idx] && arr[idx]?.type === type) {
        arr[idx] = { ...requiredCard }
      } else {
        arr.unshift({ ...requiredCard })
      }
    }
  })

  // აქ shuffle - ი უფრო რანდომად გაანაწილებს სწორი ქარდები სად გამოჩნდება, მაგრამ რო ვამოწმებდი შანსი აქვს რო სწორი ქარდები გაიტანოს maxLenght - ის გარეთ და აღარ გამოჩნდება, ანუ მე - 8 ან მე - 9 ელემენტად გაიტანოს, და აქ მარტო პირველ 7-ს ვარენდერებთ

  // მაქსიმუმ 7 რო იყოს
  return arr.slice(0, maxLength)
}

export function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
