import * as React from 'react'
import Image from 'next/image'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'

export default function Details({
  manageSchedule,
}: {
  manageSchedule: MANAGE_SCHEDULE[]
}) {
  console.log(manageSchedule)
  const data = manageSchedule?.map((schedule) => {
    const startDate = new Date(
      Number(schedule.scheduleStart[0]),
      Number(schedule.scheduleStart[1]),
      Number(schedule.scheduleStart[2]),
    )
    console.log(startDate)
    const endDate = schedule.scheduleEnd
      ? new Date(
          Number(schedule.scheduleStart[0]),
          Number(schedule.scheduleStart[1]),
          Number(schedule.scheduleStart[2]),
        )
      : null
    return {
      startDate: `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`,
      isChecked: schedule.isComplete,
      endDate: endDate
        ? `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`
        : null,
    }
  })
  console.log(data)
  // 예제 데이터
  const exampleData = [
    {
      date: '2024-05-01',
      isChecked: true,
    },
    {
      date: '2024-05-05',
      isChecked: false,
    },
    {
      date: '2024-05-06',
      isChecked: false,
    },
  ].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <div className="flex w-[343px] flex-col p-[16px] pb-0 items-start gap-[16px] rounded-[18px] bg-white">
      <div className="flex items-center gap-[8px] text-gray-700">
        <Image
          src="/icons/calendar.svg"
          width={24}
          height={24}
          alt="calendar"
          className=""
        />
        <div className="fontchange font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
          진행 일정을 확인해보세요.
        </div>
      </div>
      <div className="relative w-[158px]">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              margin: '-20px',
              paddingBottom: 0,
            },
          }}
        >
          {data?.map((item, index) => (
            <TimelineItem sx={{ minHeight: 50 }}>
              <TimelineSeparator>
                <div className="w-[32px] h-[32px]">
                  <Image
                    src={`${item.isChecked === true ? '/icons/check_circle_fill.svg' : '/icons/check_circle.svg'}`}
                    width={32}
                    height={32}
                    alt="check_circle"
                  />
                </div>
                {index < data.length - 1 && (
                  <TimelineConnector className="bg-gray-300" />
                )}
              </TimelineSeparator>
              <TimelineContent style={{ padding: 5, height: '10px' }}>
                <span className="flex fontchange font-Pretendard font-medium text-[16px] leading-[24px] capitalize whitespace-nowrap">
                  {!item.endDate
                    ? item.startDate.replaceAll('-', '.')
                    : `${item.startDate.replaceAll('-', '.')} ~ ${item.endDate.replaceAll('-', '.')}`}
                </span>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  )
}
