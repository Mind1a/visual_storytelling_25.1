import { StaticImageData } from "next/image"

/// Gallery Page Data
export type WordsData = {
  id: number
  word: string
  type: string
  image: StaticImageData
}

export type PaginationToken = number | "ELLIPSIS"

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onPrevPage: () => void
  onNextPage: () => void
}

export type SearchFilterProps = {
  searchValue: string
  setSearchValue: (value: string) => void
  selectedFilters: string[]
  handleCheckboxChange: (type: string) => void
}

export type GalleryItemProps = {
  item: WordsData
  onDownload: (imageUrl: string, fileName: string) => void
}

export type GalleryGridProps = {
  items: WordsData[]
  onDownload: (imageUrl: string, fileName: string) => void
}
