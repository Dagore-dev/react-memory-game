import PrimaryLayout from '../layouts/PrimaryLayout'
import Board from '../components/Board'
import Button from '../components/Button'
import { useLocation } from 'wouter'

interface Props {
  level: string
}

export default function Game (props: Props): JSX.Element {
  const { level } = props
  const [, setLocation] = useLocation()

  function handleBack (): void {
    setLocation('../')
  }

  return (
    <PrimaryLayout>
      <Board level={level} />
      <div className='text-center'>
        <Button onClick={handleBack}>Volver</Button>
      </div>
    </PrimaryLayout>
  )
}
