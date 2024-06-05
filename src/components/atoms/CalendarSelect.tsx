import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import IconCalendar from '../icons/calendar'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

export default function CalendarSelect() {
  const [isChecked, setIsChecked] = useState(false)
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleButtonClick = () => {
    if (isChecked) {
      setIsCalendarVisible(true)
    }
  }

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection)
  }

  return (
    <div className="font-Pretendard">
      <div className="flex items-center">
        <input
          className="w-[20px] h-[20px]"
          type="checkbox"
          id="calendar-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="text-[16px] font-semibold leading-[24px] ml-[8px] text-gray-900 capitalize">
          진행 기간
        </div>
        <button
          type="button"
          className={`flex w-[205px] h-[48px] p-[12px] ml-[12px] gap-[8px] items-center border border-gray-300 rounded-[8px] text-[16px] font-medium leading-[24px]  ${isChecked ? 'text-gray-400' : 'text-gray-300'}`}
          onClick={handleButtonClick}
          disabled={!isChecked}
        >
          <IconCalendar color={isChecked ? '#9CA3AF' : '#D1D5DB'} /> 기간을
          선택해주세요.
        </button>
      </div>
      {isCalendarVisible && (
        <div className="mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            rangeColors={['#3b82f6']}
          />
        </div>
      )}
    </div>
  )
}
