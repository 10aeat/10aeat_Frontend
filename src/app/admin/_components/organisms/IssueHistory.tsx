'use client'

import { useState } from 'react'
import Table from '../atoms/Table'
import TableHead from '../atoms/TableHead'
import AdminModalOrganism from './AdminModalOrganism'
import { BottomStyle } from '../atoms/AdminModalBottom'
import HandOffModal from './HandOffModal'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHandOffModalOpen, setIsHandOffModalOpen] = useState(false)
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

  const handleAddIssue = () => {
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

  const handleDelete = () => {
    setIsHandOffModalOpen(true) // HandOffModal 열기
  }

  const handleCloseHandOffModal = () => {
    setIsHandOffModalOpen(false) // HandOffModal 닫기
  }

  return (
    <div>
      <TableHead
        imgSrc={'/icons/volume.svg'}
        title={'이슈 공지 히스토리'}
        warn={'*점검 관련 이슈를 등록하면 소유주에게 공지됩니다.'}
        btnText={'이슈 등록하기'}
        handleAddItem={handleAddIssue}
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
          title={modalMode === 'add' ? '이슈 등록' : '이슈 수정'}
          onClose={handleCloseModal}
          btntext={modalMode === 'add' ? '등록하기' : '수정하기'}
          bottomStyle={BottomStyle.CANCEL_DONE}
        >
          <div className="flex flex-col gap-y-6 items-start">
            <span className="text-gray-400">
              유지보수 사안과 관련된 이슈가 있을 시 작성해주세요.
              <br />
              이슈 등록이 되면 해당 이슈는 소유자에게 공지됩니다.
            </span>
            <div className="flex flex-col items-start gap-[8px] self-stretch">
              <div className="text-blue-600 font-semibold">제목</div>
              {/* input */}
              <input type="text" defaultValue={currentItem?.title || ''} />
            </div>
            <div>
              <div className="text-blue-600 font-semibold">상세 내용</div>
              {/* input */}
              <textarea defaultValue={currentItem?.content || ''}></textarea>
            </div>
          </div>
        </AdminModalOrganism>
      )}
      {isHandOffModalOpen && (
        <HandOffModal
          handleCloseModal={handleCloseHandOffModal}
          subTitle="이슈 공지 히스토리"
          count={selectedItems.length}
        />
      )}
    </div>
  )
}
