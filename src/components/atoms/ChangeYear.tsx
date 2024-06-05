import Image from 'next/image'

interface Props {
  selectedYear: number
  onPreviousYear: () => void
  onNextYear: () => void
}

export default function ChangeYear({
  selectedYear,
  onPreviousYear,
  onNextYear,
}: Props) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex justify-center items-center mt-[10px] mb-4">
      <Image
        src="/icons/lastyear.svg"
        width={10}
        height={10}
        alt="이전"
        onClick={onPreviousYear}
        className="cursor-pointer"
      />
      <span className="mx-4 text-gray-700 font-semibold font-Pretendard text-xl capitalize">
        {selectedYear}
      </span>
      <Image
        src="/icons/nextyear.svg"
        width={10}
        height={10}
        alt="다음"
        onClick={selectedYear === currentYear ? undefined : onNextYear}
        className={
          selectedYear === currentYear
            ? 'opacity-30 disabled'
            : 'cursor-pointer'
        }
      />
    </div>
  )
}
