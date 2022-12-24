import PrimaryLayout from '../layouts/PrimaryLayout'

interface Props {
  level: string
}

export default function Game (props: Props): JSX.Element {
  const { level } = props

  return (
    <PrimaryLayout>
      <h1 className='text-center font-black text-fuchsia-500'>{`Nivel ${level}`}</h1>
    </PrimaryLayout>
  )
}
