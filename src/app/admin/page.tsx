import DatePicker from '@/components/atoms/DatePicker'
import Dropdown from '@/components/atoms/Dropdown'

export default function Home() {
  return (
    <div>
      <DatePicker isDisabled={false} />
      <Dropdown size="md" isDisabled={false} options={['1', '2', '3']} />
      <Dropdown size="sm" isDisabled={false} options={['1', '2', '3']} />
      <Dropdown size="sm" isDisabled={true} options={['1', '2', '3']} />
    </div>
  )
}
