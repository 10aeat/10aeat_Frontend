export enum TagStyle {
  ISSUE_TAG = 'ISSUE_TAG',
  TAG_SORT = 'TAG_SORT',
}

interface Props {
  tagStyle: TagStyle
  tagName?: string
}

export default function AdminTag({ tagStyle, tagName }: Props) {
  const selectTag = () => {
    switch (tagStyle) {
      case TagStyle.ISSUE_TAG:
        return (
          <div className="ml-2 text-sm font-medium inline-flex h-[18px] p-[10px] items-center gap-[6px] shrink-0 rounded-[8px] capitalize leading-[1px] font-Pretendard bg-[#F6EDFF] text-[#B56DFD] cursor-default">
            <div className="w-2 h-2 rounded-lg bg-[#B56DFD]" />
            이슈 게시중
          </div>
        )
      case TagStyle.TAG_SORT:
        return (
          <div className="text-sm font-medium flex flex-wrap w-[72px] max-h-[42px] px-2 py-[10px] justify-center items-center content-center rounded-[8px] capitalize leading-[1px] font-Pretendard bg-gray-200 text-gray-500 cursor-default">
            {tagName}
          </div>
        )
      default:
        return null
    }
  }
  return <>{selectTag()}</>
}
