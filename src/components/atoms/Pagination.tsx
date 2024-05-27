import Image from 'next/image'
import Page from './Page'
import { useEffect, useState } from 'react'

interface Props {
  totalItems: number
}

export default function Pagination({ totalItems }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / 20))
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / 20))
  }, [totalItems])

  useEffect(() => {
    updatePageNumbers(currentPage)
  }, [currentPage, totalPages])

  const updatePageNumbers = (page: number) => {
    let startPage = 1
    let endPage = totalPages

    if (totalPages > 5) {
      startPage = Math.max(1, page - 2)
      endPage = Math.min(totalPages, page + 2)

      if (endPage - startPage < 4) {
        if (page < 3) {
          endPage = startPage + 4
        } else {
          startPage = endPage - 4
        }
      }
    }

    const pageNums = []
    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(i)
    }
    setPageNumbers(pageNums)
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      updatePageNumbers(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      updatePageNumbers(currentPage + 1)
    }
  }

  const pagination = () => {
    return (
      <div className="inline-flex items-start gap-[4px] relative mt-6 justify-center">
        {totalPages > 1 && (
          <Image
            src="/icons/arrow_left_large.svg"
            onClick={handlePreviousClick}
            width={36}
            height={36}
            alt="previous"
            className={`!bg-[unset] flex flex-col justify-center items-center p-[10px] gap-[10px] rounded-[8px] cursor-pointer ${currentPage === 1 ? 'opacity-30' : ''}`}
          />
        )}

        {totalItems > 20 &&
          pageNumbers.map((page) => (
            <Page
              key={page}
              status={page === currentPage ? 'current' : 'default'}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </Page>
          ))}

        {totalPages > 1 && (
          <Image
            src="/icons/arrow_right_large.svg"
            onClick={handleNextClick}
            width={36}
            height={36}
            alt="next"
            className={`!bg-[unset] flex flex-col justify-center items-center p-[10px] gap-[10px] rounded-[8px] cursor-pointer ${currentPage === totalPages ? 'opacity-30' : ''}`}
          />
        )}
      </div>
    )
  }
  return <>{pagination()}</>
}
