import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import Image from 'next/image'

export default function TableHead() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex font-Pretendard font-lg font-semibold capitalize gap-x-2 items-end">
        <Image
          src={'/icons/checklist_minimalistic.svg'}
          width={24}
          height={24}
          alt={'list'}
        />
        <span>사안 진행 현황</span>
      </div>
      <div className="flex gap-x-2">
        <AdminButton buttonStyle={ButtonStyle.ACCENT} buttonSize={'lg'}>
          <Image
            src={'/icons/plus.svg'}
            alt="+"
            width={20}
            height={20}
            className="mr-1"
          />
          진행 현황 추가
        </AdminButton>
        <AdminButton buttonStyle={ButtonStyle.WARNING} buttonSize={'lg'}>
          삭제
        </AdminButton>
      </div>
    </div>
  )
}
