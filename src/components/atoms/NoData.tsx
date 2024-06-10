import Image from 'next/image'

export default function NoData() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[450px]">
      <Image
        src="/icons/clipboard_check.svg"
        width={80}
        height={80}
        alt="no-data"
        className="shrink-0 mb-[20px]"
      />
      <span className="text-gray-600 text-center font-Pretendard text-xl font-bold capitalize">
        등록된 법정 시설물 <br />
        유지관리 점검이 없습니다.
      </span>
    </div>
  )
}
