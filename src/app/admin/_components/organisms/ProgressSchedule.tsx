import Table from '../atoms/Table'
import TableHead from '../atoms/TableHead'

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

export default function ProgressScheduleOrganism({
  columns,
  data,
  noDataText,
  selectedItems,
  setSelectedItems,
}: Props) {
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

  const handleAddProgress = () => {}

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
    </div>
  )
}
