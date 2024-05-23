export default function IconProfile ({width="72px", height="72px"}) {
  return (
    <div className={`flex w-[${width}] h-[${height}] rounded-full shrink-0 bg-gray-300`}>
        <svg className="w-[100%] h-[100%] pt-[20.3125%] pb-[7.8125%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6" r="4" fill="#FFF"/>
        <ellipse cx="12" cy="17" rx="7" ry="4" fill="#FFF"/>
        </svg>
    </div>
  )
}