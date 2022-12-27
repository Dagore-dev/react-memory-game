// eslint-disable-next-line
import Card from '../interfaces/Card'
import useBoard from '../hooks/useBoard'
import MemoryCard from './MemoryCard/MemoryCard'

interface Props {
  level: string
}

export default function Board (props: Props): JSX.Element {
  const { level } = props
  const {
    content,
    choiceOne,
    choiceTwo,
    turns,
    handleChoice
  } = useBoard(level)

  if (content.every(card => card.matched)) {
    return (
      <h2 className='text-center text-4xl font-bold text-fuchsia-500'>
        ¡Lo hiciste en {turns} turnos!
      </h2>
    )
  }

  return (
    <>
      <div className='grid grid-cols-4 text-4xl gap-8'>
        {content.map(card => {
          return (
            <MemoryCard
              key={crypto.randomUUID()}
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              handleChoice={handleChoice}
            />
          )
        })}
      </div>
      <p className='text-center text-xl font-bold text-fuchsia-500'>
        Turno: {turns}
      </p>
    </>
  )
}
