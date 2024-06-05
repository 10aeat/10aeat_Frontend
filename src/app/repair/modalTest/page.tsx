/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client'

import NoBox from '@/components/atoms/NoBox'
import AdminCard from '@/app/admin/_components/atoms/AdminCard'
import { useState } from 'react'
import ProfileModal from '@/components/ProfileModal'
import CommentsModal from '@/components/CommentsModal'
import TextArea from '@/components/atoms/TextArea'

export default function TestModal() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)

  const openProfileModal = () => setIsProfileModalOpen(true)
  const closeProfileModal = () => setIsProfileModalOpen(false)

  const openCommentsModal = () => setIsCommentsModalOpen(true)
  const closeCommentsModal = () => setIsCommentsModalOpen(false)

  return (
    <>
      <div className="px-4 w-full mt-8 mb-[100px]" onClick={openProfileModal}>
        <div className="font-bold text-lg font-Pretendard mb-3">담당자</div>
        <AdminCard managerId={1} />
      </div>
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />

      <div className="px-4 w-full mt-8" onClick={openCommentsModal}>
        <div className="font-bold text-lg font-Pretendard mb-3">댓글</div>
        <NoBox type="댓글" />
      </div>
      <CommentsModal
        isOpen={isCommentsModalOpen}
        onClose={closeCommentsModal}
      />
    </>
  )
}
