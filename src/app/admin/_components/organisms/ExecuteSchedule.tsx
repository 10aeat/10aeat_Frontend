import React, { useEffect, useState } from 'react'
import DatePicker1 from '@/components/atoms/DatePicker'
import Table from '../atoms/Table'
import TableHead from '../atoms/TableHead'
import AdminModalOrganism from './AdminModalOrganism'
import { BottomStyle } from '../atoms/AdminModalBottom'
import HandOffModal from './HandOffModal'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHandOffModalOpen, setIsHandOffModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit'>()
  const [currentItem, setCurrentItem] = useState<ITEM | null>(null)

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

  const handleAddSchedule = () => {
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
        imgSrc="/icons/calendar-dark.svg"
        title="시행 일정"
        star="*"
        btnText="점검 일정 추가"
        handleAddItem={handleAddSchedule}
        handleDelete={handleDelete}
        selectedItems={selectedItems}
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
        handleEdit={handleEdit}
      />
      {isModalOpen && (
        <AdminModalOrganism
          title={modalMode === 'add' ? '점검 일정 추가' : '점검 일정 수정'}
          onClose={handleCloseModal}
          btntext={modalMode === 'add' ? '추가하기' : '수정하기'}
          bottomStyle={BottomStyle.CANCEL_DONE}
        >
          <div className="flex flex-col gap-y-6 items-start">
            <span className="text-gray-400">
              점검 일정과 함께 일정이 변경되는 사유를 작성해주세요.
              <br />
              변경 사유는 이슈 히스토리에 일정 변경 이슈로 게시되며, 소유주에게
              공지됩니다.
            </span>
            <div className="flex flex-col items-start gap-[8px] self-stretch">
              <span className="text-blue-600 font-semibold">
                1. 점검 상세 일자
              </span>
              <div className="flex w-[200px] h-[48px] items-center text-gray-500 gap-x-2">
                <DatePicker1
                  isDisabled={false}
                  defaultValue={currentItem?.startDate}
                />
                ~
                <DatePicker1
                  isDisabled={false}
                  defaultValue={currentItem?.endDate}
                />
              </div>
            </div>
            {modalMode !== 'add' && (
              <div>
                <span className="text-blue-600 font-semibold">
                  2. 일정 관련 변경 사유 &nbsp;&nbsp;*필수
                </span>
                <div className="flex flex-col font-medium text-gray-600">
                  <span>제목</span>
                  <input type="text" defaultValue={currentItem?.title || ''} />
                  <span>상세 내용</span>
                  <textarea defaultValue={currentItem?.content || ''} />
                </div>
              </div>
            )}
          </div>
        </AdminModalOrganism>
      )}
      {isHandOffModalOpen && (
        <HandOffModal
          handleCloseModal={handleCloseHandOffModal}
          subTitle="시행 일정"
          count={selectedItems.length}
        />
      )}
    </div>
  )
}
