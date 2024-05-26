"use client"

import AdminCard from '@/components/atoms/AdminCard'
import { useState } from 'react'
import ProfileModal from '@/components/ProfileModal';

export default function TestModal() {
 const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="px-4 w-full mt-8 mb-[100px]" onClick={openModal}>
        <div className="font-bold text-lg font-Pretendard mb-3">담당자</div>
        <AdminCard name="김주은" mail="abc@abc.com" phone="01012345678" />
      </div>
      <ProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
