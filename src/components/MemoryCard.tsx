import Emoji from './Emoji'

interface Props {
  label?: string
  symbol: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function MemoryCard (props: Props): JSX.Element {
  const { label, symbol, onClick } = props

  return (
    <span>
      <div onClick={onClick} className='w-14 h-14 bg-[var(--option-color)] rounded shadow' />
      <Emoji symbol={symbol} label={label} />
    </span>
  )
}
