'use client'

import '../../styles/issueStyle.scss'
import Image from 'next/image'
import React, { useState } from 'react'

export enum IssueStyle {
  ISSUE_TOGGLE = 'ISSUE_TOGGLE',
  ISSUE_ALERT = 'ISSUE_ALERT',
}

interface Props {
  issueStyle: IssueStyle
  title: string
  content: string
}

export default function IssueStore({ issueStyle, title, content }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const selectIssue = () => {
    switch (issueStyle) {
      case IssueStyle.ISSUE_TOGGLE:
        return (
          <div
            className={`w-[343px] ${isOpen ? 'h-auto p-[16px]' : 'h-[64px]'} flex-col shirnk-0 justify-between items-center font-Pretendard rounded-[16px] bg-white px-[16px] `}
          >
            <div className="flex h-full">
              <div className="flex pr-[8px] items-center font-semibold text-gray-900">
                <Image
                  src="/icons/danger_circle.svg"
                  width={32}
                  height={32}
                  alt="danger_circle"
                  className="mr-[8px]"
                />
                <span
                  className={`title ${isOpen ? 'overflow-visible' : 'overflow-hidden'} max-w-[239px]`}
                >
                  {title}
                </span>
              </div>
              <Image
                src="/icons/arrow_down_large.svg"
                width={24}
                height={24}
                alt="arrow_down_large"
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            {isOpen && (
              <>
                <div className="my-[16px] px-[24px] py-[16px] justify-center items-center gap-[8px] rounded-[16px] bg-gray-100 h-auto font-Pretendard">
                  {content}
                </div>
                <div className="flex justify-between">
                  <button type="button" className="bg-green-100 w-[150px]">
                    다시 보지 않음
                  </button>
                  <button type="button" className="bg-green-100 w-[150px]">
                    접어 두기
                  </button>
                </div>
              </>
            )}
          </div>
        )

      default:
        return null
    }
  }
  return <>{selectIssue()}</>
}
