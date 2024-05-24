interface Props {
  status: 'current' | 'default'
  children: number
  onClick: () => void
}

export default function Page({ status, children, onClick }: Props) {
  const page = () => {
    return (
      <button
        className="w-[36px] h-[36px] flex flex-col items-center gap-[10px] p-[10px] h-[36px] rounded-[8px] justify-center relative"
        onClick={onClick}
      >
        <div
          className={`font-Pretendard font-semibold text-[13px] leading-normal relative ${status == 'current' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          {children}
        </div>
      </button>
    )
  }
  return <>{page()}</>
}
