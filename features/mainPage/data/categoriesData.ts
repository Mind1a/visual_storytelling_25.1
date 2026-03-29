import { CategorieDataType } from "@/types/mainPageTypes";

export const categories: CategorieDataType[] = [
  {
    id: 1,
    icon: "/icons/nounIcon.svg",
    text: "არსებითი სახელი",
    bgColor: "#A4BEF3",
    active: true,
    mobielBg: "#BAD8FC"
    
  },
  {
    id: 2,
    icon: "/icons/signIcon.svg",
    text: "ბრუნვის ნიშნები",
    bgColor: "#F5E393",
    active: false,


  },
  {
    id: 3,
    icon: "/icons/adpositionIcon.svg",
    text: "თანდებულები",
    bgColor: "#73C9C1",
    active: false,


  },
  {
    id: 4,
    icon: "/icons/verbIcon.svg",
    text: "ზმნები",
    bgColor: "#F5B3A3",
    active: false,


  },
]
