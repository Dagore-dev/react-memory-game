import React, { useEffect, useState } from 'react'
import Card from '../interfaces/Card'
import MemoryCard from './MemoryCard/MemoryCard'
import getBoardContent from '../services/getBoardContent'

interface Props {
  level: string
}

export default function Board (props: Props): JSX.Element {
  const { level } = props
  const [content, setContent] = useState(getBoardContent(Number(level)))
  const [choiceOne, setChoiceOne] = useState<Card | undefined>()
  const [choiceTwo, setChoiceTwo] = useState<Card | undefined>()
  const [turns, setTurns] = useState<number>(0)

  useEffect(() => {
    if (choiceOne != null && choiceTwo != null) {
      if (choiceOne.value === choiceTwo.value) {
        setContent(previous => previous.map(card => {
          if (card.value === choiceOne.value) {
            return {
              ...card,
              matched: true
            }
          } else {
            return card
          }
        }))

        resetTurn()
      } else {
        setTimeout(resetTurn, 500)
      }
    }
  }, [choiceOne, choiceTwo])

  function handleChoice (card: Card): void {
    if (choiceOne != null) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }
  }

  function resetTurn (): void {
    setChoiceOne(undefined)
    setChoiceTwo(undefined)
    setTurns(previous => previous + 1)
  }

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
