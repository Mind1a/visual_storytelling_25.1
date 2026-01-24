export type CategorieDataType = {
    id: number;
    icon: string;
    text: string;
    bgColor: string;
    active: boolean;
    mobielBg?: string;
}

export type CategoriesProps = {
  categories: CategorieDataType[]
  active: number
  setActive: (id: number) => void
 
}

export type Card = {
  id: string
  type: "noun" | "case" | "verb" | "postposition"
  value: string
  label: string
}

export type CorrectCard = Omit<Card, "label">



