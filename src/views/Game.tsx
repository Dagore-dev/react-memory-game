import Emoji from '../components/Emoji'
import PrimaryLayout from '../layouts/PrimaryLayout'
import getBoardContent from '../services/getBoardContent'

interface Props {
  level: string
}

export default function Game (props: Props): JSX.Element {
  const { level } = props
  const fruits = getBoardContent(Number(level))
  return (
    <PrimaryLayout>
      <div className='grid grid-cols-4 text-4xl gap-8'>
        {fruits.map(fruit => <Emoji key={crypto.randomUUID()} symbol={fruit} />)}
      </div>
    </PrimaryLayout>
  )
}
