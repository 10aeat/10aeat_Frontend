import React from 'react'
import '../../styles/boxStyle.scss'

export enum BoxStyle {
  DEFAULT_TAG = 'DEFAULT_TAG',
  TAG = 'TAG',
  BADGE = 'BADGE',
}

interface Props {
  boxStyle: BoxStyle
  children?: React.ReactNode
  progress?: 'PENDING' | 'INPROGRESS' | 'COMPLETE'
}

export default function BoxStore({ boxStyle, children, progress }: Props) {
  const selectBox = () => {
    switch (boxStyle) {
      case BoxStyle.DEFAULT_TAG:
        return (
          <div className="tag flex border-solid border-[1px] border-gray-300 bg-gray-50 text-gray-700 capitalize leading-[1px] font-Pretendard">
            {children}
          </div>
        )
      case BoxStyle.TAG:
        let tagClass =
          'tag flex border-solid border-[1px] text-gray-700 capitalize leading-[1px] font-Pretendard'
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
      case BoxStyle.BADGE:
        return (
          <div className="badge w-[58px] h-[28px] flex shrink-0 justify-center items-center text-blue-500 rounded-[30px]">
            <div className="w-[56px] h-[26px] flex shrink-0 justify-center items-center rounded-[30px] bg-white leading-[1px] font-Pretendard font-semibold">
              NEW
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectBox()}</>
}
