import AdminModalTop from '../molecules/AdminModalTop'
import AdminModalMain from '../molecules/AdminModalMain'
import AdminModalBottom, { BottomStyle } from '../atoms/AdminModalBottom'
import { useState } from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export default function AdminModalOrganism({ title, children }: Props) {
  const [isVisible, setIsVisible] = useState(true)

  const handleCancel = () => {
    setIsVisible(false)
  }

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.72)] ${isVisible ? 'flex' : 'hidden'}`}
        >
          <div className="flex flex-col w-[487px] min-h-[280px] items-start font-Pretendard">
            <AdminModalTop title={title} onCancel={handleCancel} />
            <AdminModalMain>{children}</AdminModalMain>
            <AdminModalBottom
              bottomStyle={BottomStyle.CANCEL_DONE}
              text="추가하기"
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </>
  )
}
