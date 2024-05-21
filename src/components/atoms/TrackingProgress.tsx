import React from 'react'
import Box, { BoxStyle } from './Box'
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'

// 타입 정의
interface TimelineItemProps {
  date: string
  title: string
  description?: string
  isCurrent?: boolean
}

// 예제 데이터
const exampleData: TimelineItemProps[] = [
  {
    date: '2024-05-01',
    title: '안건 발의',
    description: '',
  },
  {
    date: '2024-05-05',
    title: '투표 진행',
    description:
      '5월 3일~5월 5일까지 해결방안 결정을 위해 소유주 투표를 진행함',
  },
  {
    date: '2024-05-06',
    title: '긴급회의',
    description:
      '긴급 회의 소집 및 해결방안 결정\n삼성중공업에 설치요구 공문 발송하였음',
    isCurrent: true,
  },
].sort((a, b) => b.date.localeCompare(a.date))

export default function TrackingProgress() {
  return (
    <Box boxStyle={BoxStyle.BOX_WHITE_CONTENT}>
      <Timeline style={{ padding: 0 }}>
        {exampleData.map((item, index) => (
          <MuiTimelineItem key={index} style={{ minHeight: 0 }}>
            <TimelineOppositeContent
              style={{
                flex: 0.1,
                padding: 0,
                marginTop: 2,
                minWidth: '38px',
                display: 'flex',
              }}
            >
              <div
                className={`text-sm font-Pretendard ${item.isCurrent ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}
              >
                {item.date.slice(5).replace('-', '.')}
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator
              style={{
                paddingLeft: 13,
                paddingRight: 18,
                width: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TimelineDot
                className={
                  item.isCurrent ? 'bg-blue-500 animation-pulse' : 'bg-gray-500'
                }
                style={{
                  width: item.isCurrent ? '10px !important' : '8px !important',
                  height: item.isCurrent ? '10px !important' : '8px !important',
                  margin: '7px 0px',
                  justifyContent: 'center',
                  padding: 0,
                  boxShadow: item.isCurrent
                    ? '0 0 8px rgba(0, 123, 255, 0.5) !important'
                    : 'none',
                }}
              />
              {index < exampleData.length - 1 && (
                <TimelineConnector
                  style={{
                    flexGrow: 1,
                    backgroundColor: 'gray',
                    width: 1,
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent style={{ padding: 0, height: 'auto' }}>
              <span
                className={`text-base font-Pretendard font-semibold ${item.isCurrent ? 'text-gray-900' : 'text-gray-600'}`}
              >
                {item.title}
              </span>
              {item.description && (
                <p
                  className={`font-Pretendard text-sm ${item.isCurrent ? 'text-gray-900' : 'text-gray-500'} mb-4`}
                >
                  {item.description}
                </p>
              )}
            </TimelineContent>
          </MuiTimelineItem>
        ))}
      </Timeline>
    </Box>
  )
}
