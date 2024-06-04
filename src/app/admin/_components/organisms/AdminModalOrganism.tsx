import AdminModalTop from '../molecules/AdminModalTop'
import AdminModalMain from '../molecules/AdminModalMain'
import AdminModalBottom, { BottomStyle } from '../atoms/AdminModalBottom'
import { useState } from 'react'

interface Props {
  title: string
  btntext: string
  children: React.ReactNode
  onClose: () => void
}

export default function AdminModalOrganism({
  title,
  btntext,
  children,
  onClose,
}: Props) {
  const handleClose = () => {
    onClose() // 부모 컴포넌트에서 전달받은 onClose 호출
  }

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.72)]`}
    >
      <div className="flex flex-col w-[487px] min-h-[280px] items-start font-Pretendard">
        <AdminModalTop title={title} onClose={handleClose} />
        <AdminModalMain>{children}</AdminModalMain>
        <AdminModalBottom
          bottomStyle={BottomStyle.CANCEL_DONE}
          text={btntext}
          onClose={handleClose}
        />
      </div>
    </div>
  )
}
