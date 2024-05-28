import Image from 'next/image'
import Button, { ButtonStyle } from './Button'
import { useEffect, useRef, useState } from 'react'

export enum TooltipStyle {
  COUNT = 'COUNT',
  TEXT_CHANGE = 'TEXT_CHANGE',
}

interface Props {
  tooltipStyle: TooltipStyle
  count?: number
}

export default function Tooltip({ tooltipStyle, count }: Props) {
  const [activeButton, setActiveButton] = useState<ButtonStyle | null>(
    ButtonStyle.BASE,
  )
  const originalFontSizes = useRef<Map<HTMLElement, number>>(new Map())

  useEffect(() => {
    // 페이지 로드 시 각 요소의 초기 폰트 사이즈를 저장
    const elements = document.querySelectorAll<HTMLElement>('.fontchange')
    elements.forEach((element) => {
      const fontSize = window.getComputedStyle(element).fontSize
      originalFontSizes.current.set(element, parseFloat(fontSize))
    })
  }, [])

  const handleButtonClick = (buttonStyle: ButtonStyle) => {
    setActiveButton(buttonStyle)
    changeFontSize(buttonStyle)
  }

  const changeFontSize = (buttonStyle: ButtonStyle) => {
    const elements = document.querySelectorAll<HTMLElement>('.fontchange')
    elements.forEach((element) => {
      const originalFontSize = originalFontSizes.current.get(element)
      if (originalFontSize !== undefined) {
        let newFontSize
        switch (buttonStyle) {
          case ButtonStyle.BASE:
            newFontSize = originalFontSize + 'px'
            break
          case ButtonStyle.LARGE:
            newFontSize = originalFontSize + 2 + 'px'
            break
          case ButtonStyle.XLARGE:
            newFontSize = originalFontSize + 4 + 'px'
            break
          default:
            newFontSize = originalFontSize + 'px'
        }
        element.style.fontSize = newFontSize
      }
    })
  }

  const selectTooltip = () => {
    switch (tooltipStyle) {
      case TooltipStyle.COUNT:
        return (
          <div className="inline-flex flex-col items-center">
            <Image src="/icons/polygon3.svg" width={8} height={6} alt="tip" />
            <div className="flex-1 h-[24px] min-w-[38px] px-[4px] items-center justify-center gap-[8px] rounded-[4px] bg-gray-600 font-Pretendard text-sm text-white">
              {count}회
            </div>
          </div>
        )
      case TooltipStyle.TEXT_CHANGE:
        return (
          <div className="inline-flex flex-col items-center">
            <div className="w-full flex justify-end ">
              <Image
                src="/icons/arrow.svg"
                width={16}
                height={8}
                alt="tip"
                className="mr-[20px] shadow-secondary z-10"
              />
            </div>
            <div className="shadow-secondary flex-col shrink-0 h-[146px] w-[304px] px-[4px] items-start justify-center gap-[8px] rounded-[18px] bg-white font-Pretendard">
              <div className="flex-col w-[256px] py-[20px] pl-[20px]">
                <p className="text-base font-semibold leading-6">
                  글자 크기 설정
                </p>
                <span className="text-sm">
                  보기 편한 글자 크기로 변경해보세요!
                </span>
              </div>
              <div className="flex justify-between items-center w-full px-[20px]">
                <Button
                  buttonStyle={ButtonStyle.BASE}
                  style={`${activeButton === ButtonStyle.BASE ? 'bg-gray-300 text-gray-700' : 'bg-gray-100 text-gray-600'}`}
                  onClickFunction={() => handleButtonClick(ButtonStyle.BASE)}
                />
                <Button
                  buttonStyle={ButtonStyle.LARGE}
                  style={`${activeButton === ButtonStyle.LARGE ? 'bg-gray-300 text-gray-700' : 'bg-gray-100 text-gray-600'}`}
                  onClickFunction={() => handleButtonClick(ButtonStyle.LARGE)}
                />
                <Button
                  buttonStyle={ButtonStyle.XLARGE}
                  style={`${activeButton === ButtonStyle.XLARGE ? 'bg-gray-300 text-gray-700' : 'bg-gray-100 text-gray-600'}`}
                  onClickFunction={() => handleButtonClick(ButtonStyle.XLARGE)}
                />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  return <>{selectTooltip()}</>
}
