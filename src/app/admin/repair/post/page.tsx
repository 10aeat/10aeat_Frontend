'use client'

import Image from 'next/image'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import PenIcon from '/public/icons/pen_with_line.svg'
import { useState } from 'react'

export default function RepairPost() {
  return (
    <div className="font-Pretendard bg-white">
      <div className="flex items-center py-[24px] mx-[24px] my-[16px] border-b border-gray-300">
        <Image
          src="/icons/arrow_left_large.svg"
          width={24}
          height={24}
          alt="arrow_left_large"
        />        
        <div className="text-[20px] font-bold leading-[28px] text-gray-900 capitalize pl-[4px]">
          건물 유지보수 게시물
        </div>
      </div>
      <div className="flex flex-col px-[40px] gap-[24px]">
        <div className="flex gap-[8px]">
          <TagBadge tagBadgeStyle={TagBadgeStyle.TAG} progress="INPROGRESS" />
          <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>보수</TagBadge>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[28px] font-bold leading-[36px] capitalize text-gray-900">
            2층 우수관 하자발생 조치
          </div>
          <div className="flex gap-[12px]">
            <AdminButton
              buttonStyle={ButtonStyle.SECONDARY_BLUE}
              buttonSize="lg"
            >             
              <PenIcon color={"#2563EB"} width={24} height={24} />
              수정
            </AdminButton>
            <AdminButton buttonStyle={ButtonStyle.ERROR} buttonSize="lg">
              삭제
            </AdminButton>
          </div>
        </div>
        <div className="flex h-[64px] gap-[16px] items-center border-y border-gray-200 text-[16px] leading-[24px] capitalize text-gray-900 font-normal">
          <div className="flex gap-[8px]">
            <div className="font-bold">게시일</div>
            <div>24.04.30</div>
          </div>
          <div className="flex gap-[8px]">
            <div className="font-bold">작성자</div>
            <div>김주은</div>
          </div>
          <div className="flex gap-[8px]">
            <div className="font-bold">진행기간</div>
            <div>없음</div>
          </div>
          <div className="flex gap-[8px]">
            <div className="font-bold">조회수</div>
            <div>12명 읽음</div>
          </div>
        </div>

        <img
          className="w-[712px] h-[417px] bg-contain bg-center"
          src="https://s3-alpha-sig.figma.com/img/388d/c026/cf053329ca2233996a2bac5635059fd1?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OBuuKSqG7yX1GBRWp-dkP8YMovet4kLoLbhZ8iq17aQmyrvd7mUFZEqfctey66VFMpGJVU8Y0VwC6ZogepkrEXv9SmVTqAbXjU4Z~klAlGbEieSBt3PpEMomgLGBL2~nw0XQb39UtKd61Hlt7JYhClg9Eh4OWGZF6okHFIKS0R5SO3nC5F58tVbOwHRsLcl58jX9s-klyd-z6TLbPrr9uC7cAQfspkMX3-ZuchKN1lk59QYArEgaG9dROlM~~PT2juGccZURA9arcO4xmQ-ZEnWB6OEJyO5YUWbeRjUrBfTFj~XdCJOgsSzv1ywb8apaXcIC-Q9o~~wbt3EL4N2VBQ__"
          alt="이미지"
        />
        <div className="text-[16px] font-normal leading-[24px]">
          하자조치 : 2024.05.15 시작 예정 2층 호실들 중 3개의 호실에 우수관 <br/>
          누수가 발생했습니다. 한양 하자팀 / 이노 인테리어 업체를 불러서 하자 <br/>
          공사를 할 예정입니다.
        </div>
      </div>
      <div className="h-[8px] bg-gray-50 shadow-post"/>
      <div>댓글창</div>
    </div>
  )
}
