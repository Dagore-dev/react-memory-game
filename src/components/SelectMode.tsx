import ModeOption from './ModeOption'

interface Props {
  modes: string[]
}

export default function SelectMode (props: Props): JSX.Element {
  const { modes } = props
  return (
    <ul>
      {modes.map((mode, index) => <ModeOption key={crypto.randomUUID()} content={mode} value={index} />)}
    </ul>
  )
}
