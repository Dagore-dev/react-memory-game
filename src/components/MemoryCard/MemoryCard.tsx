import './style.css'
import Card from '../../interfaces/Card'
import Emoji from '../Emoji'

interface Props {
  card: Card
  flipped: boolean
  handleChoice: (card: Card) => void
}

export default function MemoryCard (props: Props): JSX.Element {
  const { card, flipped, handleChoice } = props

  function handleClick (): void {
    handleChoice(card)
  }

  return (
    <div className='card'>
      <div className={flipped ? ' flipped' : ''}>
        <Emoji symbol={card.value} label={undefined} className='front card block w-14 h-14' />
        <div onClick={handleClick} className='w-14 h-14 bg-[var(--option-color)] rounded shadow' />
      </div>
    </div>
  )
}
