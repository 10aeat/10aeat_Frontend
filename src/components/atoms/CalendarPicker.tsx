'use client'

import Image from 'next/image'
import * as React from 'react'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { ClickAwayListener } from '@mui/material'

export default function CalendarPicker() {
  const [open, setOpen] = useState(true)
  const handleToggle = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <div
      className="inline-flex flex-col items-start gap-[8px]"
      onClick={handleToggle}
    >
      <div className="relative flex w-[200px] h-[48px] py-[12px] pl-[12px] pr-[100px] items-center rounded-[8px] border-solid border-[1px] border-gray-300 bg-white hover:bg-gray-50 ">
        <div className="flex items-center gap-[8px]  ">
          <Image
            src="/icons/calendar2.svg"
            alt="calendar"
            className="w-[20px] h-[20px]"
            width={20}
            height={20}
          />
          <div className="font-Pretendard text-[16px] font-medium leading-[24px] capitalize text-gray-400 hover:text-gray-500">
            24.12.31
          </div>
        </div>
      </div>

      {open && (
        <div className="relative left-0 w-[300px] h-[300px] rounded-[8px] border-[1px] border-solid border-gray-300 bg-white boxshadow-secondary z-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ width: 300, height: 300, margin: 0 }} />
          </LocalizationProvider>
        </div>
      )}
    </div>
  )
}
