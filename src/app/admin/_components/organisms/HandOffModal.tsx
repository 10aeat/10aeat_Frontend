import AdminModalOrganism from './AdminModalOrganism'
import { BottomStyle } from '../atoms/AdminModalBottom'

interface Props {
  subTitle: string
  count: number
  handleCloseModal: () => void
}

export default function HandOffModal({
  subTitle,
  count,
  handleCloseModal,
}: Props) {
  return (
    <AdminModalOrganism
      title="삭제하시겠습니까?"
      onClose={handleCloseModal}
      btntext="삭제하기"
      bottomStyle={BottomStyle.CANCEL_DELETE}
    >
      <div className="flex flex-col gap-y-6 items-start">
        <span className="text-gray-800 font-medium">{subTitle}</span>
        <span className="text-gray-400">
          선택하신 게시물은 모두
          <span className="text-blue-600"> {count}개</span> 입니다.
          <br />
          삭제된 데이터는 복구하실 수 없습니다.
        </span>
      </div>
    </AdminModalOrganism>
  )
}
