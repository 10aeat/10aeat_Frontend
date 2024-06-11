'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useIssueStore } from '../store/IssueStore'

export enum IssueStyle {
  ISSUE_TOGGLE = 'ISSUE_TOGGLE',
  ISSUE_ALERT = 'ISSUE_ALERT',
}

interface Props {
  issueStyle: IssueStyle
  title?: string
  content?: string
  onConfirm?: () => void
}

export default function Issue({
  issueStyle,
  title,
  content,
  onConfirm,
}: Props) {
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
            className={`w-[343px] ${isOpen ? 'h-auto p-4' : 'h-[64px]'} flex-col shrink-0 justify-between items-center font-Pretendard rounded-[16px] bg-white px-4 mb-8`}
          >
            <div className="flex h-full justify-between items-center">
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
                  className={`${isOpen ? 'overflow-visible whitespace-normal' : 'text-ellipsis overflow-hidden whitespace-nowrap'} max-w-[239px] text-lg font-bold`}
                >
                  {title}
                </span>
              </div>
              <div
                className={`flex h-full ${isOpen ? 'items-start' : 'items-center'} `}
              >
                <Image
                  src={`${isOpen ? '/icons/arrow_up_large.svg' : '/icons/arrow_down_large.svg'}`}
                  width={24}
                  height={24}
                  alt="arrow_down_large"
                  className="cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
            {isOpen && (
              <>
                <div className="my-[16px] px-[24px] py-[16px] justify-center items-center gap-[8px] rounded-[16px] bg-gray-100 h-auto font-Pretendard text-gray-900 text-base">
                  {content}
                </div>
                <div
                  className="flex justify-between text-gray-700
                "
                >
                  <button
                    type="button"
                    className="text-sm w-[150px]"
                    onClick={hideComponent}
                  >
                    다시 보지 않음
                  </button>
                  <button
                    type="button"
                    className="text-sm w-[150px]"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    접어 두기
                  </button>
                </div>
              </>
            )}
          </div>
        )
      case IssueStyle.ISSUE_ALERT:
        return (
          <div className="w-[343px] h-auto p-[16px] flex-col shrink-0 justify-between items-center font-Pretendard rounded-[16px] bg-white px-[16px]">
            <div className="flex h-full">
              <div className="flex pr-[8px] items-center font-semibold text-red-500">
                <div className="flex h-full items-center">
                  <Image
                    src="/icons/danger_circle.svg"
                    width={32}
                    height={32}
                    alt="danger_circle"
                    className="mr-[8px]"
                  />
                </div>
                확인해야 할 사항이 있어요!
              </div>
            </div>
            <div className="text-base my-[16px] px-[24px] py-[16px] justify-center items-center gap-[8px] rounded-[16px] bg-gray-100 h-auto font-Pretendard text-gray-900">
              <div className="text-2xl font-bold mb-[8px]">{title}</div>
              {content}
            </div>

            {/* ButtonStore에서 생기면 버튼 가져오기 */}
            <button
              type="button"
              className="w-[311px] bg-blue-600 rounded-[16px] text-white p-[14px]"
              onClick={onConfirm}
            >
              확인했어요
            </button>
          </div>
        )
      default:
        return null
    }
  }
  return <>{selectIssue()}</>
}
