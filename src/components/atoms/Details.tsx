import * as React from 'react'
import Image from 'next/image'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'

export default function Details() {
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
        <div className="font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
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
          {exampleData.map((item, index) => (
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
                {index < exampleData.length - 1 && (
                  <TimelineConnector className="bg-gray-300" />
                )}
              </TimelineSeparator>
              <TimelineContent style={{ padding: 5, height: '10px' }}>
                <span
                  className={`font-Pretendard font-medium text-[16px] leading-[24px] capitalize`}
                >
                  {item.date.replaceAll('-', '.')}
                </span>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  )
}
