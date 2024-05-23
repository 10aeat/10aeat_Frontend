import LinearProgress from '@mui/material/LinearProgress'

interface Props {
  min: number
  max: number
}

export default function ProgressBar({ min, max }: Props) {
  const percentage = (min / max) * 100

  return (
    <div className="flex w-full items-center justify-between text-gray-700">
      <span className="w-[39px]">{percentage.toFixed(0)}%</span>
      <div className="flex-grow mx-3">
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#E5E7EB',
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: percentage === 100 ? '#2563EB' : '#93C5FD',
            },
          }}
        />
      </div>
      <div className="w-[43px] flex gap-x-0.5 justify-end">
        <span className="font-semibold">{min}</span>/<span>{max}</span>
      </div>
    </div>
  )
}
