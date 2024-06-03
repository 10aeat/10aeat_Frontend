// Table.tsx
'use client'

import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Column {
  title: string
  dataIndex: string
  render?: (text: string, record: any, index: number) => React.ReactNode
}

interface Props {
  columns: Column[]
  data: any[]
  noDataText: string
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
}

export default function Table({
  columns,
  data,
  noDataText,
  selectedItems,
  setSelectedItems,
}: Props) {
  const [adjustedColumns, setAdjustedColumns] = useState(
    columns.filter((col) => col.title !== '완료여부'),
  )
  const [statusColumn, setStatusColumn] = useState(
    columns.find((col) => col.title === '완료여부'),
  )

  useEffect(() => {
    // '완료 여부' 컬럼을 제외한 나머지 컬럼들
    setAdjustedColumns(columns.filter((col) => col.title !== '완료 여부'))
    // '완료 여부' 컬럼
    setStatusColumn(columns.find((col) => col.title === '완료 여부'))
  }, [columns]) // columns가 변경될 때마다 이 로직을 실행

  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedItems(data.map((item) => item.date)) // 예시로 date를 사용
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (isSelected: boolean, item: any) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, item.date]) // 예시로 date를 사용
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== item.date))
    }
  }

  return (
    <table className="table-auto w-full font-Pretendard font-medium rounded-t-lg mt-4">
      <thead className="bg-gray-100 text-gray-500 h-[48px]">
        <tr>
          <th className="px-6 py-3 flex justify-between items-center w-fit whitespace-nowrap">
            <input
              type="checkbox"
              onChange={(e) => handleSelectAll(e.target.checked)}
              checked={selectedItems.length === data.length}
              className="mr-3"
            />
            No.
          </th>
          {adjustedColumns.map((col) => (
            <th
              key={col.dataIndex}
              className="px-6 py-3 whitespace-nowrap text-start"
            >
              {col.title}
            </th>
          ))}
          <th className="px-6 py-3"></th>
          {statusColumn && ( // '완료 여부' 컬럼 렌더링
            <th
              key={statusColumn.dataIndex}
              className="px-6 py-3 whitespace-nowrap text-start"
            >
              {statusColumn.title}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-3 whitespace-nowrap">
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectItem(e.target.checked, item)}
                  checked={selectedItems.includes(item.date)}
                  className="mr-3"
                />
                {index + 1}
              </td>
              {adjustedColumns.map((col) => (
                <td
                  key={col.dataIndex}
                  className="px-6 py-3 w-fit items-center"
                >
                  {col.render
                    ? col.render(item[col.dataIndex], item, index)
                    : item[col.dataIndex]}
                </td>
              ))}
              <td className="px-6 py-3 whitespace-nowrap w-[88px]">
                <AdminButton
                  buttonStyle={ButtonStyle.SECONDARY_BLUE}
                  buttonSize={'lg'}
                >
                  <Image
                    src={'/icons/pen2.svg'}
                    alt={'pen'}
                    width={16}
                    height={16}
                  />
                  수정
                </AdminButton>
              </td>
              {statusColumn && ( // '완료 여부' 데이터 렌더링
                <td
                  key={statusColumn.dataIndex}
                  className="px-6 py-3 w-fit items-center"
                >
                  {statusColumn.render
                    ? statusColumn.render(
                        item[statusColumn.dataIndex],
                        item,
                        index,
                      )
                    : item[statusColumn.dataIndex]}
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length + 2} className="text-center px-6 py-3">
              {noDataText}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
