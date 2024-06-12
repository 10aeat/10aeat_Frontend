// TrackingProgress

import React, { useEffect, useState } from 'react'
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'
import Box, { BoxStyle } from './Box'
import { useAccessToken } from '../store/AccessTokenStore'

export default function TrackingProgress({
  repairArticleId,
}: {
  repairArticleId: string | string[]
}) {
  const [progressData, setProgressData] = useState<AGENDA_PROGRESS[]>()
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const getProgressData = async () => {
      try {
        const getProgressResponse = await fetch(
          `http://api.10aeat.com/repair/articles/progress/${repairArticleId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const getProgressData = await getProgressResponse.json()
        setProgressData(getProgressData.data)
        console.log('progressData: ', getProgressData.data)
      } catch (error) {
        console.error(error)
      }
    }
    getProgressData()
  }, [repairArticleId])

  console.log(progressData)
  return (
    <Box boxStyle={BoxStyle.BOX_WHITE_CONTENT}>
      <Timeline style={{ padding: 0 }}>
        {progressData?.map((item, index) => {
          const { startSchedule } = item
          const month = String(startSchedule[1]).padStart(2, '0')
          const day = String(startSchedule[2]).padStart(2, '0')
          const formattedDate = `${month}.${day}`

          return (
            <MuiTimelineItem
              key={progressData[index].id}
              style={{ minHeight: 0 }}
            >
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
                  className={`text-sm font-Pretendard ${item.inProgress ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}
                >
                  {formattedDate}
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
                  height: index === progressData.length - 1 ? '25px' : '',
                }}
              >
                <TimelineDot
                  style={{
                    backgroundColor: item.inProgress
                      ? 'rgb(59 130 246)'
                      : 'rgb(107 114 128)',
                    width: 10,
                    height: 10,
                    animation: item.inProgress
                      ? 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      : '',
                    margin: '7px 0px',
                    justifyContent: 'center',
                    padding: 0,
                    boxShadow: item.inProgress
                      ? '0 0 8px rgba(0, 123, 255, 0.5) !important'
                      : 'none',
                  }}
                />
                {index < progressData.length - 1 && (
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
                  className={`text-base font-Pretendard font-semibold ${item.inProgress ? 'text-gray-900' : 'text-gray-600'}`}
                >
                  {item.title}
                </span>
                {item.content && (
                  <p
                    className={`font-Pretendard text-sm ${item.inProgress ? 'text-gray-900' : 'text-gray-500'} mb-4`}
                  >
                    {item.content}
                  </p>
                )}
              </TimelineContent>
            </MuiTimelineItem>
          )
        })}
      </Timeline>
    </Box>
  )
}
