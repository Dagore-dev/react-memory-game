import Emoji from './Emoji'

interface Props {
  elements: string[]
}

export default function Board (props: Props): JSX.Element {
  const { elements } = props

  return (
    <div className='grid grid-cols-4 text-4xl gap-8'>
      {elements.map(element => <Emoji key={crypto.randomUUID()} symbol={element} />)}
    </div>
  )
}
