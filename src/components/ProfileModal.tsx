"use client"

import React from 'react'
import Image from 'next/image'
import IconProfile from './icons/profile'
import IconMessages from './icons/message'
import IconPhone from './icons/phone'
import { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

interface profileData {
  name: string;
  lunchBreakStart: string;
  lunchBreakEnd: string;
  email: string;
  managerOffice: string;
  phoneNumber: string;
  affiliation: string;
}

export default function ProfileModal({ isOpen, onClose }: ModalProps) {

  const [profileData, setProfileData] = useState<profileData | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('클립보드에 복사되었습니다.');
    }, (err) => {
      console.error('Failed to copy: ',err);
    })
  }

  if (!profileData) {
    // return null;
  }

  return (
    <div
      className={`${isOpen ? 'translate-y-[150px]' : 'translate-y-full'} fixed transition-transform duration-500 top-0 justify-center w-[375px] h-[736px] pt-[24px] shrink-0 rounded-t-[24px] bg-white font-Pretendard`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="inline-flex items-start gap-[264px] w-[375px] h-[24px] px-[20px] shrink-0 bg-white">
        <div className="w-[47px] h-[24px] align-text-top text-gray-900 text-[18px] leading-6 font-bold">
          담당자
        </div>
        <button onClick={onClose}>
          <Image src="/icons/close.svg" width={24} height={24} alt="close" />
        </button>
      </div>
      <div className="flex mx-[auto] mt-[66px] w-[72px] h-[72px] rounded-full shrink-0 shadow-profile">
        <IconProfile />
      </div>
      <div className="flex justify-center items-center gap-[11px] mt-[24px] text-gray-900 text-2xl">
        <div className="font-medium">관리자</div>
        <div className="w-[1px] h-[24px] bg-[#BCBCBC]"></div>
        <div className="font-bold">{profileData?.name}</div>
      </div>
      <div className="flex mt-[8px] justify-center  text-[18px] leading-[24px] font-medium">
        점심시간 {profileData?.lunchBreakStart} ~ {profileData?.lunchBreakEnd}
      </div>
      <div className="grid mt-[24px] mx-[auto] justify-center w-[311px] h-[222px] shrink-0 rounded-[24px] gap-[8px] px-[32px] py-[24px] bg-gray-100 shadow-primary text-base ">
        <div className="flex gap-[8px]">
          <div className="font-bold">소속</div>
          <div className="font-medium">{profileData?.affiliation}</div>
        </div>
        <div>
          <div className="font-bold">관리실 위치</div>
          <div className="font-medium">{profileData?.managerOffice}</div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="font-bold">E-mail</div>
          <div className="font-medium">{profileData?.email}</div>
          <button className="text-[14px] font-normal text-[#216FD6]" onClick={() => copyToClipboard(profileData?.email)}>
            복사
          </button>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="font-bold">전화번호</div>
          <div className="font-medium">{profileData?.phoneNumber}</div>
          <button className="text-[14px] font-normal text-[#216FD6]" onClick={() => copyToClipboard(profileData?.phoneNumber)}>
            복사
          </button>
        </div>
      </div>
      <div className="flex pt-[48px] justify-center gap-[10px] text-base font-medium">
        <button className="flex items-center justify-center gap-[4px] w-[166px] h-[52px] rounded-[16px] shrink-0 bg-white border border-blue-500 text-blue-700" onClick={() => copyToClipboard(profileData?.email)}>
          <IconMessages color="#1D4ED8" width="20" height="20"></IconMessages>{' '}
          메일보내기
        </button>
        <button className="flex items-center justify-center gap-[4px] w-[166px] h-[52px] rounded-[16px] shrink-0 bg-blue-700 text-white">
          <a href={`tel:${profileData?.phoneNumber}`}></a>
          <IconPhone color="#FFFFFF" width="20" height="20"></IconPhone>{' '}
          전화걸기
        </button>
      </div>
    </div>
  )
}