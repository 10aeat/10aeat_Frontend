'use client'

import Image from 'next/image'
import * as React from 'react'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

import dayjs from 'dayjs'

interface Props {
  isDisabled: boolean
}

export default function DatePicker1({ isDisabled }: Props) {
  const [open, setOpen] = useState(false)
  const [entryRequired, setEntryRequired] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const handleToggle = () => {
    if (!isDisabled) {
      setOpen(!open)
    }
  }

  const handleDateChange = (date: React.SetStateAction<dayjs.Dayjs>) => {
    if (!isDisabled) {
      setSelectedDate(date)
      setOpen(false) // 날짜 선택 후 캘린더 닫기
      console.log(date)
    }
  }

  return (
    <div className="flex w-[200px] h-[48px]">
      <div
        className={`inline-flex flex-col items-start gap-[8px] ${isDisabled ? 'opacity-40' : ''}`}
        onClick={handleToggle}
      >
        <div
          className={`relative flex w-[200px] h-[48px] py-[12px] pl-[12px] pr-[100px] items-center rounded-[8px] border-solid border-[1px] group cursor-pointer bg-white hover:bg-gray-50 ${open ? 'text-gray-500 border-gray-400' : 'text-gray-400 border-gray-300'} ${entryRequired ? 'border-red-500' : ''}`}
        >
          <div className="flex items-center gap-[8px]">
            <Image
              src="/icons/calendar2.svg"
              alt="calendar"
              className="w-[20px] h-[20px]"
              width={20}
              height={20}
            />
            <div
              className={`font-Pretendard text-[16px] font-medium leading-[24px] capitalize text-gray-400 group-hover:text-gray-500 ${open ? 'text-gray-500' : 'text-gray-400'}`}
            >
              {entryRequired ? '' : selectedDate.format('YY.MM.DD')}
            </div>
          </div>
        </div>

        {open && (
          <div className="relative left-0 w-[300px] h-[300px] rounded-[8px] border-[1px] border-solid border-gray-300 bg-white boxshadow-secondary z-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
                sx={{ width: 300, height: 300, margin: 0 }}
              />
            </LocalizationProvider>
          </div>
        )}
      </div>
    </div>
  )
}
