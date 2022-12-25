interface Props {
  label?: string
  symbol: string
}

export default function Emoji (props: Props): JSX.Element {
  const { label, symbol } = props

  return (
    <span
      className='emoji'
      role='img'
      aria-label={label ?? ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}
