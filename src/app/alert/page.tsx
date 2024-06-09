import Alert from '@/components/atoms/Alert'
import NavBar from '@/components/atoms/NavBar'

export default function Page() {
  return (
    <div className="flex flex-col h-[812px] w-full items-center bg-gray-100 ">
      <NavBar isTextChange={false} isTitle>
        알림
      </NavBar>
      <div className="inline-flex flex-col items-start">
        <Alert isReply />
        <Alert />
        <Alert />
        <Alert />
      </div>
    </div>
  )
}
