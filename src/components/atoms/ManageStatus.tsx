/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/button-has-type */

'use client'

import Image from 'next/image'
import { ResponsivePie } from '@nivo/pie'
import { useRouter } from 'next/navigation'

export default function ManageStatus() {
  const router = useRouter()
  const data = [
    {
      id: '완료',
      label: '완료',
      value: 20,
      color: '#1D4ED8',
    },
    {
      id: '진행중/대기',
      label: '진행중/대기',
      value: 5,
      color: '#E5E7Eb',
    },
  ]
  const totalValue = data.reduce((acc, item) => acc + item.value, 0)
  const completedItem = data.find((item) => item.id === '완료')
  const completedValue = completedItem ? completedItem.value : 0
  const completionPercentage = ((completedValue / totalValue) * 100).toFixed(0)
  return (
    <div className="relative w-[343px] h-[228px] top-[36px] bg-white rounded-[18px] shadow-primary">
      <button
        className="z-10 inline-flex items-start absolute top-[16px] left-[16px]"
        onClick={() => router.push('/manage')}
      >
        <div className="relative w-[94px] h-[23px] font-Pretendard text-[16px] font-semibold leading-[24px] ">
          전체 점검 현황
        </div>
        <Image
          src="/icons/arrow_right_small.svg"
          width={24}
          height={24}
          alt="arrow_right_small"
          className="!relative !w-[24px] !h-[24px]"
        />
      </button>
      <ResponsivePie
        data={data}
        margin={{ top: 60, right: 90, bottom: 25, left: -30 }}
        innerRadius={0.8}
        cornerRadius={2}
        activeOuterRadiusOffset={3}
        colors={['#1D4ED8', '#E5E7Eb']}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        theme={{
          labels: {
            text: {
              fontSize: '16px',
              fontFamily: 'Pretendard',
              fill: '#4B5563',
              fontWeight: 500,
              lineHeight: 24,
            },
          },
          legends: {
            text: {
              fontSize: '13px',
              fontFamily: 'Pretendard',
              // fill: '#4B5563',
              fontWeight: 600,
              lineHeight: 24,
            },
          },
        }}
        legends={[
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 80,
            translateY: 10,
            itemsSpacing: 1,
            itemWidth: 121,
            itemHeight: 28,
            itemTextColor: '#4B5563',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 10,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
            data: data.map((d) => ({
              id: d.id,
              label: `${d.label} ${d.value}건`,
              color: d.color,
            })),
            // data: data.map((d) => ({
            //   id: d.id,
            //   label: `${d.label} (${d.value})`,
            // })),
          },
        ]}
        layers={[
          'arcs',
          ({ centerX, centerY }) => (
            <>
              <g transform={`translate(${centerX},${centerY - 10})`}>
                <text
                  x="-7"
                  dominantBaseline="central"
                  textAnchor="middle"
                  className="text-[28px] font-bold font-Pretendard text-gray-700"
                >
                  {completionPercentage}
                </text>
                <text
                  x="12"
                  y="-10"
                  dy="1.2em"
                  className="text-[14px] font-normal font-Pretendard text-gray-900"
                >
                  %
                </text>
              </g>
              <g transform={`translate(${centerX},${centerY + 17})`}>
                <text
                  dominantBaseline="central"
                  textAnchor="middle"
                  className="text-[14px] font-normal font-Pretendard text-gray-900"
                >
                  점검완료
                </text>
              </g>
            </>
          ),
          ({ centerX, centerY }) => (
            <g transform={`translate(${centerX + 130},${centerY - 35})`}>
              <text
                x="-20"
                dominantBaseline="central"
                textAnchor="middle"
                className="text-[16px] font-medium font-Pretendard text-gray-700"
              >
                전체
              </text>
              <text
                x="10"
                dominantBaseline="central"
                textAnchor="middle"
                className="text-[16px] font-bold font-Pretendard text-gray-700"
              >
                {totalValue}
              </text>
              <text
                x="28"
                dominantBaseline="central"
                textAnchor="middle"
                className="text-[16px] font-medium font-Pretendard text-gray-700"
              >
                건
              </text>
            </g>
          ),
          'legends',
        ]}
      />
    </div>
  )
}
