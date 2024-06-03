'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default function AdminMonthPicker() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showMonthYearPicker
        dateFormat="MM월"
      />
    </div>
  )
}
