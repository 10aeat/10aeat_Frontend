import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import Image from 'next/image'

interface Props {
  imgSrc: string
  title: string
  warn?: string
  btnText: string
}

export default function TableHead({ imgSrc, title, warn, btnText }: Props) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex font-Pretendard text-lg font-semibold capitalize gap-x-2 items-end">
        <Image src={imgSrc} width={24} height={24} alt={'list'} />
        <span>{title}</span>
        <span className="text-gray-400 text-sm font-medium">{warn}</span>
      </div>
      <div className="flex gap-x-2">
        <AdminButton buttonStyle={ButtonStyle.ACCENT} buttonSize={'md'}>
          <Image
            src={'/icons/plus.svg'}
            alt="+"
            width={20}
            height={20}
            className="mr-1"
          />
          {btnText}
        </AdminButton>
        <AdminButton buttonStyle={ButtonStyle.WARNING} buttonSize={'md'}>
          삭제
        </AdminButton>
      </div>
    </div>
  )
}
