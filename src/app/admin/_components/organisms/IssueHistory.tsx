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
  statusColumn?: Column // statusColumn 추가
  handleStatusChange?: (value: string, index: number) => void // handleStatusChange 추가
  handleSelectAll?: (isSelected: boolean) => void // handleSelectAll 추가
  handleSelectItem?: (isSelected: boolean, item: any) => void // handleSelectItem 추가
}

export default function IssueHistoryOrganism({
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

  const handleAddIssue = () => {
    setIsModalOpen(true) // 모달 열기
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // 모달 닫기
  }

  return (
    <div>
      <TableHead
        imgSrc={'/icons/volume.svg'}
        title={'이슈 공지 히스토리'}
        warn={'*점검 관련 이슈를 등록하면 소유주에게 공지됩니다.'}
        btnText={'이슈 등록하기'}
        handleAddItem={handleAddIssue}
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
          title={'이슈 등록'}
          onClose={handleCloseModal}
          btntext={'추가하기'}
        >
          <div></div>
        </AdminModalOrganism>
      )}
    </div>
  )
}
