export enum ButtonStyle {
  PRIMARY = 'PRIMARY',
  SECONDARY_BLUE = 'SECONDARY_BLUE',
  SECONDARY_GRAY = 'SECONDARY_GRAY',
  NEUTRAL = 'NEUTRAL',
  ACCENT = 'ACCENT',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  GHOST_BLUE = 'GHOST_BLUE',
  GHOST_GRAY = 'GHOST_GRAY',
}

interface Props {
  buttonStyle: ButtonStyle
  buttonSize: string
  isDisabled?: boolean
  children?: React.ReactNode
  onClickFunction?: () => Promise<void> | void
}

export default function AdminButton({
  buttonStyle,
  buttonSize,
  isDisabled,
  children,
  onClickFunction,
}: Props) {
  const selectButton = () => {
    const defaultStyle =
      'flex justify-center items-center font-Pretendard font-medium capitalize cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'

    let sizeStyle = ''
    switch (buttonSize) {
      case 'sm':
        sizeStyle = 'gap-0.5 rounded-lg text-sm p-2.5'
        break
      case 'md':
        sizeStyle = 'gap-1 rounded-[10px] text-base p-3.5'
        break
      case 'lg':
        sizeStyle = 'gap-2 rounded-xl text-xl p-3.5'
        break
      default:
        sizeStyle = ''
    }

    switch (buttonStyle) {
      case ButtonStyle.PRIMARY:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-white bg-blue-600 enabled:hover:bg-blue-700 enabled:active:bg-blue-800`}
            disabled={isDisabled}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.SECONDARY_BLUE:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-blue-600 border border-blue-600 bg-white enabled:hover:bg-blue-50 enabled:active:bg-blue-100`}
            disabled={isDisabled}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )

      case ButtonStyle.SECONDARY_GRAY:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-[#808080] border border-gray-300 bg-white enabled:hover:bg-gray-50 enabled:hover:text-gray-600 enabled:active:bg-gray-100 enabled:active:text-gray-600`}
            disabled={isDisabled}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.NEUTRAL:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-gray-500 bg-gray-100 enabled:hover:bg-gray-200 enabled:active:bg-gray-300`}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.ACCENT:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-blue-600 bg-blue-50 enabled:hover:bg-blue-100 enabled:active:bg-blue-200`}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.WARNING:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-white bg-red-500 enabled:hover:bg-red-600 enabled:active:bg-red-700`}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.ERROR:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-red-500 bg-red-50 enabled:hover:bg-red-100 enabled:active:bg-red-200`}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.GHOST_BLUE:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-blue-600 bg-white enabled:hover:bg-blue-50 enabled:hover:text-blue-700 enabled:active:bg-blue-100 enabled:active:text-blue-700`}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.GHOST_GRAY:
        return (
          <button
            type="button"
            className={`${defaultStyle} ${sizeStyle} text-gray-500 bg-white enabled:hover:bg-gray-50 enabled:hover:text-gray-600 enabled:active:bg-gray-100 enabled:active:text-gray-700`}
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
