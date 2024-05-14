'use client'

import '../../styles/issueStyle.scss'
import Image from 'next/image'
import React, { useState } from 'react'
import { useIssueStore } from '../store/IssueStore'

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
  const { isVisible, setIsVisible } = useIssueStore()
  const [isOpen, setIsOpen] = useState(false)

  const hideComponent = () => {
    setIsVisible(false)
  }

  const selectIssue = () => {
    if (!isVisible) return null

    switch (issueStyle) {
      case IssueStyle.ISSUE_TOGGLE:
        return (
          <div
            className={`w-[343px] ${isOpen ? 'h-auto p-[16px]' : 'h-[64px]'} flex-col shrink-0 justify-between items-center font-Pretendard rounded-[16px] bg-white px-[16px] `}
          >
            <div className="flex h-full">
              <div className="flex pr-[8px] items-center font-semibold text-gray-900">
                <div
                  className={`flex h-full ${isOpen ? 'items-start' : 'items-center'}`}
                >
                  <Image
                    src="/icons/danger_circle.svg"
                    width={32}
                    height={32}
                    alt="danger_circle"
                    className="mr-[8px]"
                  />
                </div>
                <span
                  className={`issueTitle ${isOpen ? 'overflow-visible whitespace-normal' : 'overflow-hidden whitespace-nowrap'} max-w-[239px]`}
                >
                  {title}
                </span>
              </div>
              <Image
                src={`${isOpen ? '/icons/arrow_up_large.svg' : '/icons/arrow_down_large.svg'}`}
                width={24}
                height={24}
                alt="arrow_down_large"
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            {isOpen && (
              <>
                <div className="content my-[16px] px-[24px] py-[16px] justify-center items-center gap-[8px] rounded-[16px] bg-gray-100 h-auto font-Pretendard text-gray-900">
                  {content}
                </div>
                <div
                  className="flex justify-between text-gray-700
                "
                >
                  <button
                    type="button"
                    className="button w-[150px]"
                    onClick={hideComponent}
                  >
                    다시 보지 않음
                  </button>
                  <button
                    type="button"
                    className="button w-[150px]"
                    onClick={() => setIsOpen(!isOpen)}
                  >
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
