import DatePicker from '@/components/atoms/DatePicker'
import Dropdown from '@/components/atoms/Dropdown'

export default function Home() {
  return (
    <div>
      <DatePicker isDisabled={false} />
      <Dropdown size="md" isDisabled={false} />
      <Dropdown size="sm" isDisabled={false} />
      <Dropdown size="sm" isDisabled={true} />
    </div>
  )
}
