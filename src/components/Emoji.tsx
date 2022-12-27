interface Props {
  symbol: string
  label?: string
  className?: string
}

export default function Emoji (props: Props): JSX.Element {
  const { symbol, label, className } = props

  return (
    <span
      className={`emoji ${className ?? ''}`}
      role='img'
      aria-label={label ?? ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}
