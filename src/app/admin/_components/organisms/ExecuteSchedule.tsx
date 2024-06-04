import React, { useEffect, useState } from 'react'
import Table from '../atoms/Table'
import TableHead from '../atoms/TableHead'

interface Column {
  title: string
  dataIndex: string
  render?: (text: string, record: any, index: number) => React.ReactNode
}

interface Props {
  columns: Column[]
  data: ITEM[]
  noDataText: string
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
}

export default function ExecuteScheduleOrganism({
  columns,
  data: initialData,
  noDataText,
  selectedItems,
  setSelectedItems,
}: Props) {
  const [data, setData] = useState(initialData)
  const [adjustedColumns, setAdjustedColumns] = useState(
    columns.filter((col) => col.title !== '완료 여부'),
  )
  const [statusColumn, setStatusColumn] = useState(
    columns.find((col) => col.title === '완료 여부'),
  )

  useEffect(() => {
    setData(initialData)
    setAdjustedColumns(columns.filter((col) => col.title !== '완료 여부'))
    setStatusColumn(columns.find((col) => col.title === '완료 여부'))
  }, [columns, initialData])

  const handleStatusChange = (value: string, index: number) => {
    const newData = [...data]
    const item = {
      ...newData[index],
      status: value,
      disabled: value === '완료',
    }
    newData[index] = item
    setData(newData)
  }

  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedItems(data.map((item) => item.title))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (isSelected: boolean, item: any) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, item.title])
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== item.title))
    }
  }

  return (
    <div>
      <TableHead
        imgSrc={'/icons/calendar-dark.svg'}
        title={'시행 일정'}
        star={'*'}
        btnText={'점검 일정 추가'}
      />
      <Table
        columns={adjustedColumns}
        data={data}
        noDataText={noDataText}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        statusColumn={statusColumn}
        handleStatusChange={handleStatusChange}
        handleSelectAll={handleSelectAll}
        handleSelectItem={handleSelectItem}
      />
    </div>
  )
}
