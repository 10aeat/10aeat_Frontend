import React from 'react'
import Image from 'next/image'

export enum ModalStyle {
  Over_Two = 'Over_Two',
  OnlyOne = 'OnlyOne',
}

interface ModalProps {
  modalStyle: ModalStyle
  onClose?: () => void
  onConfirm?: () => void
  room: string
}

export default function Modal({
  modalStyle,
  onClose,
  onConfirm,
  room,
}: ModalProps) {
  const selectModal = () => {
    switch (modalStyle) {
      case ModalStyle.Over_Two:
        return (
          <div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-[0.72] font-Pretendard">
            <div className="flex flex-col w-[343px] bg-white rounded-[16px] text-gray-900">
              <div className="flex items-center justify-between pl-[24px] pt-[24px] pr-[20px] text-[24px] font-bold leading-[32px]">
                호실 삭제
                <button type="button" onClick={onClose}>
                  <Image
                    src="/icons/close.svg"
                    width={24}
                    height={24}
                    alt="close"
                  />
                </button>
              </div>
              <div className="flex flex-col justify-center min-h-[120px] px-[24px] pt-[8px] pb-[16px] gap-[8px] text-[18px] leading-[24px]">
                <div className="font-semibold">'{room}'</div>
                <div className="font-normal">호실을 삭제할까요?</div>
              </div>
              <div className="flex justify-end px-[24px] pt-[12px] pb-[24px] gap-[12px]">
                <button
                  type="button"
                  className="p-[14px] bg-gray-100 justify-center items-center rounded-[10px] text-[16px] font-medium leading-[16px] text-gray-500"
                  onClick={onClose}
                >
                  닫기
                </button>
                <button
                  type="button"
                  className="p-[14px] bg-red-500 justify-center items-center rounded-[10px] text-[16px] font-medium leading-[16px] text-white"
                  onClick={onConfirm}
                >
                  삭제하기
                </button>
              </div>
            </div>
          </div>
        )
      case ModalStyle.OnlyOne:
        return (
          <div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-[0.72] font-Pretendard">
            <div className="flex flex-col w-[343px] bg-white rounded-[16px] text-gray-900">
              <div className="flex flex-col justify-center min-h-[120px] px-[24px] pt-[8px] pb-[16px] gap-[8px] text-[18px] leading-[24px]">
                <div className="font-semibold">
                  최소 1개 이상의 호실은 <br /> 등록되어야 합니다.
                </div>
              </div>
              <div className="flex justify-end px-[24px] pt-[12px] pb-[24px] gap-[12px]">
                <button
                  type="button"
                  className="p-[14px] bg-gray-100 justify-center items-center rounded-[10px] text-[16px] font-medium leading-[16px] text-gray-500"
                  onClick={onClose}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectModal()}</>
}
