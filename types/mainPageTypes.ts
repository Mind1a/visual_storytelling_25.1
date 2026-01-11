export type CategorieDataType = {
    id: number;
    icon: string;
    text: string;
    bgColor: string;
    active: boolean;
}

export type CategoriesProps = {
  categories: CategorieDataType[]
  active: number
  setActive: (id: number) => void
}

