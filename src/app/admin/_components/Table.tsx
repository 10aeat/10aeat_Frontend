// Table.tsx
'use client'

import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import Image from 'next/image'
import React from 'react'

// 데이터 타입 정의
interface Column {
  title: string
  dataIndex: string
  render?: (text: string, record: any, index: number) => React.ReactNode
}

// Props 타입 정의
interface Props {
  columns: Column[]
  data: any[]
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
}

export default function Table({
  columns,
  data,
  selectedItems,
  setSelectedItems,
}: Props) {
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
          {columns.map((col) => (
            <th
              key={col.dataIndex}
              className="px-6 py-3 whitespace-nowrap text-start"
            >
              {col.title}
            </th>
          ))}
          <th className="px-6 py-3"></th>
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
              {columns.map((col) => (
                <td key={col.dataIndex} className="px-6 py-3 w-fit">
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
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length + 2} className="text-center px-6 py-3">
              유지보수 사안이 어디까지 진행되었는지 작성해 주세요.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
