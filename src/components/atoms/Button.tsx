export enum ButtonStyle {
  TEXT_CHANGE = 'TEXT_CHANGE',
}

interface Props {
  buttonStyle: ButtonStyle
  children?: React.ReactNode
  onClickFunction?: () => Promise<void> | void
}

export default function ButtonStore({
  buttonStyle,
  onClickFunction,
  children,
}: Props) {
  const selectButton = () => {
    switch (buttonStyle) {
      case ButtonStyle.TEXT_CHANGE:
        return (
          <button
            type="button"
            className="flex justify-center items-center w-[65px] h-6 p-2 gap-2 rounded-[100px] bg-gray-200 shrink-0 font-Pretendard font-medium text-sm text-gray-700 capitalize cursor-pointer"
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      default:
        return null
    }
  }

  return <>{selectButton()}</>
}
