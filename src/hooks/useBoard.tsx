import { useEffect, useState } from 'react'
import Card from '../interfaces/Card'
import getBoardContent from '../services/getBoardContent'

interface ReturnType {
  content: Card[]
  choiceOne: Card | undefined
  choiceTwo: Card | undefined
  turns: number
  handleChoice: (card: Card) => void
}

export default function useBoard (level: string): ReturnType {
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

  return {
    content,
    choiceOne,
    choiceTwo,
    turns,
    handleChoice
  }
}
