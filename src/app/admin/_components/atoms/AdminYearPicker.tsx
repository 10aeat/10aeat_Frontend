'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default function AdminYearPicker() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showYearPicker
        dateFormat="yyyy년"
      />
    </div>
  )
}
