import '../../styles/tag.scss'

export enum TagStyle {
  WAIT_TAG = 'WAIT_TAG',
  PROCEEDING_TAG = 'PROCEEDING_TAG',
  DONE_TAG = 'DONE_TAG',
}

interface Props {
  tagStyle: TagStyle
}

export default function TagStore({ tagStyle }: Props) {
  const selectTag = (): React.ReactNode => {
    switch (tagStyle) {
      case TagStyle.WAIT_TAG:
        return (
          <div className="tag flex bg-gray-100 border-solid border-[1px] border-gray-500">
            <div className="w-2 h-2 bg-gray-500 rounded-lg" />
            대기
          </div>
        )
      case TagStyle.PROCEEDING_TAG:
        return (
          <div className="tag flex bg-green-50 border-[1px] border-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-lg" />
            진행중
          </div>
        )
      case TagStyle.DONE_TAG:
        return (
          <div className="tag flex bg-blue-50 border-[1px] border-blue-500">
            <div className="w-2 h-2 bg-blue-500 rounded-lg" />
            완료
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectTag()}</>
}
