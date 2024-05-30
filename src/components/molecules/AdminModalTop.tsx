import Image from 'next/image'

interface Props {
  title: string
}

export default function AdminModalTop({ title }: Props) {
  return (
    <div className="w-full pt-6 pr-5 pb-1 pl-6 gap-3 rounded-t-[16px] flex justify-between items-center bg-white">
      <span className="font-bold text-2xl">{title}</span>
      <Image src={'/icons/close_gray.svg'} width={24} height={24} alt="close" />
    </div>
  )
}
