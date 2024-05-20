import React from 'react'

export enum TagBadgeStyle {
  DEFAULT_TAG = 'DEFAULT_TAG',
  TAG = 'TAG',
  BADGE = 'BADGE',
}

interface Props {
  tagBadgeStyle: TagBadgeStyle
  children?: React.ReactNode
  progress?: string
}

export default function TagBadge({ tagBadgeStyle, children, progress }: Props) {
  const selectTagBadge = () => {
    switch (tagBadgeStyle) {
      case TagBadgeStyle.DEFAULT_TAG:
        return (
          <div className="text-sm font-medium inline-flex h-[18px] p-[10px] items-center gap-[6px] shrink-0 rounded-[8px] border-solid border-[1px] border-gray-300 bg-gray-50 text-gray-700 capitalize leading-[1px] font-Pretendard">
            {children}
          </div>
        )
      case TagBadgeStyle.TAG:
        let tagClass =
          'text-sm font-medium inline-flex h-[18px] p-[10px] items-center gap-[6px] shrink-0 rounded-[8px] flex border-solid border-[1px] text-gray-700 capitalize leading-[1px] font-Pretendard'
        let progressText = ''
        let dotClass = 'w-2 h-2 rounded-lg'
        switch (progress) {
          case 'PENDING':
            tagClass += ' bg-gray-100 border-gray-500 '
            dotClass += ' bg-gray-500'
            progressText = '대기'
            break
          case 'INPROGRESS':
            tagClass += ' bg-green-50 border-green-500 '
            dotClass += ' bg-green-500'
            progressText = '진행중'
            break
          case 'COMPLETE':
            tagClass += ' bg-blue-50 border-blue-500'
            dotClass += ' bg-blue-500'
            progressText = '완료'
            break
          default:
            break
        }
        return (
          <div className={tagClass}>
            <div className={dotClass} />
            {progressText}
          </div>
        )
      case TagBadgeStyle.BADGE:
        return (
          <div className="text-sm font-medium w-[58px] h-[28px] flex shrink-0 justify-center items-center text-blue-500 rounded-[30px] bg-badge-gradient">
            <div className="w-[56px] h-[26px] flex shrink-0 justify-center items-center rounded-[30px] bg-white leading-[1px] font-Pretendard font-semibold">
              NEW
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectTagBadge()}</>
}
