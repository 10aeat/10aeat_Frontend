import Image from 'next/image'
import Box, { BoxStyle } from '../atoms/Box'
import TagBadge, { TagBadgeStyle } from '../atoms/TagBadge'
import { useSaveStore } from '../store/SaveStore'

export default function AgendaContent({
  category,
  progress,
  isSave,
  title,
  updatedAt,
  adminName,
}: {
  category: string
  progress: string
  isSave: boolean
  title: string
  updatedAt: string
  adminName: string
}) {
  const { setIsSave } = useSaveStore()

  return (
    <>
      <Box boxStyle={BoxStyle.BOX_WHITE_CONTENT}>
        <div className="w-full flex items-center justify-between">
          <div className="flex space-x-2">
            <TagBadge tagBadgeStyle={TagBadgeStyle.TAG} progress={progress} />
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
              {category}
            </TagBadge>
          </div>
          <Image
            src={`${isSave ? '/icons/star_fill.svg' : '/icons/star_linear.svg'}`}
            width={28}
            height={28}
            alt="save"
            onClick={() => setIsSave(!isSave)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col text-gray-900 gap-y-3">
          <div>
            <div className="text-lg font-bold capitalize">{title}</div>
            <div className="text-gray-500 text-sm tracking-[-0.266px]">
              수정일: {updatedAt} / {adminName}
            </div>
          </div>
          {/* 작업 기간 여부 같은 것도 확인 필요. 어떻게 받아오고, 작업 시작 및 종료는 애초에 입력받을 때 부터 선택적인건지 확인 필요 */}
          <div className="capitlaize leading-6">
            금년 겨울 혹한기에 실내보온이 약해서 추위로 환경의 질이 떨어진 점과
            철도소음으로 일부 입주사들이 불편사항을 호소하였습니다. 추위와
            소음문제는 단일창으로 설계된 건물의 구조적 문제와 역세권에 위치한
            문제에서 파생하였고, 해결방안으로 이중창문을 설치하는 것이 유일한
            대안이라고 판단하였습니다. 한 호실당 설치 비용은 250만원으로
            예상됩니다. 5.6 삼성중공업에 설치요구 공문을 발송하였습니다.
          </div>
        </div>
      </Box>
    </>
  )
}
