'use client'

import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import Dropdown from '@/components/atoms/Dropdown'
import Image from 'next/image'
import React, { useState } from 'react'

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
  statusColumn?: Column
  handleStatusChange?: (value: string, index: number) => void
  handleSelectAll?: (isSelected: boolean) => void
  handleSelectItem?: (isSelected: boolean, item: any) => void
}

export default function Table({
  columns,
  data,
  noDataText,
  selectedItems,
  setSelectedItems,
  statusColumn,
  handleStatusChange,
  handleSelectAll,
  handleSelectItem,
}: Props) {
  const [disabledItems, setDisabledItems] = useState<string[]>([])

  const onStatusChange = (value: string, index: number) => {
    if (handleStatusChange) {
      handleStatusChange(value, index)
    }
    const itemKey = data[index].title
    if (value === '완료') {
      setDisabledItems([...disabledItems, itemKey])
    } else {
      setDisabledItems(disabledItems.filter((key) => key !== itemKey))
    }
  }

  const onSelectAll = (isSelected: boolean) => {
    if (handleSelectAll) {
      handleSelectAll(isSelected)
    }
    if (isSelected) {
      setSelectedItems(data.map((item) => item.title))
    } else {
      setSelectedItems([])
    }
  }

  const onSelectItem = (isSelected: boolean, item: ITEM) => {
    if (handleSelectItem) {
      handleSelectItem(isSelected, item)
    }
    if (isSelected) {
      setSelectedItems([...selectedItems, item.title])
    } else {
      setSelectedItems(selectedItems.filter((title) => title !== item.title))
    }
  }

  return (
    <table className="table-auto w-full font-Pretendard font-medium rounded-t-lg mt-4">
      <thead className="bg-gray-100 text-gray-500 h-[48px]">
        <tr>
          <th className="px-6 py-3 flex justify-between items-center w-fit whitespace-nowrap">
            <input
              type="checkbox"
              onChange={(e) => onSelectAll(e.target.checked)}
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
          {statusColumn && (
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
                  onChange={(e) => onSelectItem(e.target.checked, item)}
                  checked={selectedItems.includes(item.title)}
                  disabled={disabledItems.includes(item.title)}
                  className="mr-3"
                />
                {index + 1}
              </td>
              {columns.map((col) => (
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
                  isDisabled={item.disabled}
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
              {statusColumn && (
                <td
                  key={statusColumn.dataIndex}
                  className="px-6 py-3 w-fit items-center"
                >
                  <Dropdown
                    size="md"
                    placeholder={
                      item[statusColumn.dataIndex] === 'true'
                        ? '완료'
                        : '미완료'
                    }
                    options={['완료', '미완료']}
                    onChange={(value) => onStatusChange(value, index)}
                  />
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
