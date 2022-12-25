import { useState } from 'react'
import PrimaryLayout from '../layouts/PrimaryLayout'
import getBoardContent from '../services/getBoardContent'
import Board from '../components/Board'
import Button from '../components/Button'
import { useLocation } from 'wouter'

interface Props {
  level: string
}

export default function Game (props: Props): JSX.Element {
  const { level } = props
  const [fruits, setFruits] = useState(getBoardContent(Number(level)))
  const [, setLocation] = useLocation()

  function handleNewGame (): void {
    setFruits(getBoardContent(Number(level)))
  }

  function handleBack (): void {
    setLocation('../')
  }

  return (
    <PrimaryLayout>
      <Board elements={fruits} />
      <div className='text-center'>
        <Button onClick={handleNewGame}>Nueva partida</Button>
        <Button onClick={handleBack}>Volver</Button>
      </div>
    </PrimaryLayout>
  )
}
