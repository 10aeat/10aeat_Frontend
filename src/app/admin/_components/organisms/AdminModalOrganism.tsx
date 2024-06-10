import { useState } from 'react'
import AdminModalTop from '../molecules/AdminModalTop'
import AdminModalMain from '../molecules/AdminModalMain'
import AdminModalBottom, { BottomStyle } from '../atoms/AdminModalBottom'

interface Props {
  title: string
  bottomStyle: BottomStyle
  btntext: string
  children: React.ReactNode
  onClose: () => void
  onClickFuntion?: () => void
}

export default function AdminModalOrganism({
  title,
  btntext,
  children,
  bottomStyle,
  onClose,
  onClickFuntion,
}: Props) {
  const handleClose = () => {
    onClose() // 부모 컴포넌트에서 전달받은 onClose 호출
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.72)]">
      <div className="flex flex-col w-[487px] min-h-[280px] items-start font-Pretendard">
        <AdminModalTop title={title} onClose={handleClose} />
        <AdminModalMain>{children}</AdminModalMain>
        <AdminModalBottom
          bottomStyle={bottomStyle}
          text={btntext}
          onClose={handleClose}
          onClickFuntion={onClickFuntion}
        />
      </div>
    </div>
  )
}
