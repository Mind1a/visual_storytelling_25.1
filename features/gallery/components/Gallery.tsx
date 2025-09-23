"use client"
import React, { useEffect, useState } from "react"
import { galleryData } from "@/features/gallery/data"
import { WordsData } from "@/types"
import SearchFilter from "@/features/gallery/components/SearchFilter"
import GalleryGrid from "@/features/gallery/components/GalleryGrid"
import Pagination from "@/features/gallery/components/Pagination"
import { handleDownload } from "@/features/gallery/utils/imageDownloader"

function Gallery() {
  const [wordsData, setWordsData] = useState<WordsData[]>(galleryData)
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(wordsData.length / itemsPerPage)

  const handlePrevPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1)
  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1)

  const paginatedData = wordsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const [searchValue, setSearchValue] = useState("")

  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleCheckboxChange = (type: string) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(type)
          ? prev.filter((t) => t !== type) // remove
          : [...prev, type] // add
    )
  }
  useEffect(() => {
    const filtered = galleryData.filter(
      (item) =>
        item.word.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedFilters.length === 0 || selectedFilters.includes(item.type))
    )

    setWordsData(filtered)
    setCurrentPage(1)
  }, [searchValue, selectedFilters])

  return (
    <div className="mx-auto w-full max-w-[1366px] px-8 md:px-[80px]">
      <div className="mt-[64px] flex gap-6">
        {/* Sidebar filters */}
        <div className="flex justify-between gap-6">
          <SearchFilter
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            selectedFilters={selectedFilters}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        <div className="flex flex-1 flex-col gap-12">
          <GalleryGrid items={paginatedData} onDownload={handleDownload} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
