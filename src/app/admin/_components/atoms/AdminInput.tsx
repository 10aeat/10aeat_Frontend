import Image from 'next/image'

export default function AdminInput() {
  return (
    <div className="flex w-[444px] h-[48px] p-[12px] items-start gap-[8px] rounded-[10px] border-solid border-[1px] border-gray-300 bg-white">
      <Image
        src="/icons/search.svg"
        width={24}
        height={24}
        alt="arrow_down"
        className="w-[24px] h-[24px]"
      />
      <input
        className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700"
        placeholder="내용을 입력해주세요"
      />
      <Image
        src="/icons/close_circle.svg"
        width={24}
        height={24}
        alt="close_circle"
        className="w-[24px] h-[24px]"
      />
    </div>
  )
}
