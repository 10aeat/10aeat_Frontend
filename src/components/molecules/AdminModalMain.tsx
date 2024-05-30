interface Props {
  children: React.ReactNode
}

export default function AdminModalMain({ children }: Props) {
  return (
    <div className="w-full flex-col shrink-0 pt-2 pr-6 pb-4 pl-6 items-center gap-3 bg-white">
      {children}
    </div>
  )
}
