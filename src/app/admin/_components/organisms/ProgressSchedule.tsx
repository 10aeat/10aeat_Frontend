'use client'

import { useState } from 'react'
import Table from '../atoms/Table'
import TableHead from '../atoms/TableHead'
import AdminModalOrganism from './AdminModalOrganism'
import DatePicker1 from '@/components/atoms/DatePicker'
import { BottomStyle } from '../atoms/AdminModalBottom'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit'>()
  const [currentItem, setCurrentItem] = useState<ITEM | null>(null)

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
    setModalMode('add')
    setCurrentItem(null)
    setIsModalOpen(true)
  }

  const handleEdit = () => {
    setModalMode('edit')
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCurrentItem(null)
  }

  const handleDelete = () => {}

  return (
    <div>
      <TableHead
        imgSrc={'/icons/checklist_minimalistic.svg'}
        title={'사안 진행 현황'}
        btnText={'진행 현황 추가'}
        handleAddItem={handleAddProgress}
        handleDelete={handleDelete}
        selectedItems={selectedItems}
      />
      <Table
        columns={columns}
        data={data}
        noDataText={noDataText}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        handleSelectAll={handleSelectAll}
        handleSelectItem={handleSelectItem}
        handleEdit={handleEdit}
      />
      {isModalOpen && (
        <AdminModalOrganism
          title={modalMode === 'add' ? '진행 현황 추가' : '진행 현황 수정'}
          onClose={handleCloseModal}
          btntext={modalMode === 'add' ? '추가하기' : '수정하기'}
          bottomStyle={BottomStyle.CANCEL_DONE}
        >
          <div className="flex flex-col gap-y-6 items-start">
            <span className="text-gray-400">
              해당 유지보수 사안의 진행 현황에 대해 작성해 주세요.
              <br />
              해당 현황은 오피스너 서비스를 통해 소유자에게 노출됩니다.
            </span>
            <div className="flex flex-col items-start gap-[8px] self-stretch">
              <span className="text-blue-600 font-semibold">1. 진행 일자</span>
              <div className="flex w-[200px] h-[48px]">
                <DatePicker1
                  isDisabled={false}
                  defaultValue={currentItem?.date}
                />
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-semibold">
                2. 진행 현황 상세 내용
              </span>
              <div className="flex flex-col font-medium text-gray-600">
                <span>제목</span>
                <input type="text" defaultValue={currentItem?.title || ''} />
                <span>상세 내용</span>
                <textarea defaultValue={currentItem?.content || ''}></textarea>
              </div>
            </div>
          </div>
        </AdminModalOrganism>
      )}
    </div>
  )
}
