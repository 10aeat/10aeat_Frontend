'use client'

import { useState } from 'react'
import Table from '../atoms/Table'
import TableHead from '../atoms/TableHead'
import AdminModalOrganism from './AdminModalOrganism'

// 추가된 props 타입 정의
interface Column {
  title: string
  dataIndex: string
  render?: (text: string, record: ITEM, index: number) => React.ReactNode
}

interface Props {
  columns: Column[]
  data: ITEM[]
  noDataText: string
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
}

export default function ProgressScheduleOrganism({
  columns,
  data,
  noDataText,
  selectedItems,
  setSelectedItems,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false) // 모달 상태 추가

  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedItems(data.map((item) => item.title))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (isSelected: boolean, item: ITEM) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, item.title])
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== item.title))
    }
  }

  const handleAddProgress = () => {
    setIsModalOpen(true) // 모달 열기
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // 모달 닫기
  }

  return (
    <div>
      <TableHead
        imgSrc={'/icons/checklist_minimalistic.svg'}
        title={'사안 진행 현황'}
        btnText={'진행 현황 추가'}
        handleAddItem={handleAddProgress}
      />
      <Table
        columns={columns}
        data={data}
        noDataText={noDataText}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        handleSelectAll={handleSelectAll}
        handleSelectItem={handleSelectItem}
      />
      {isModalOpen && (
        <AdminModalOrganism
          title={'진행 현황 추가'}
          onClose={handleCloseModal}
          btntext={'등록하기'}
        >
          <div></div>
        </AdminModalOrganism>
      )}
    </div>
  )
}
