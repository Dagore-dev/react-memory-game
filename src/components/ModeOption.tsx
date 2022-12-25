import { useLocation } from 'wouter'
import Button from './Button'

interface Props {
  content: string
  value: number
}

export default function ModeOption (props: Props): JSX.Element {
  const { content, value } = props
  const [, setLocation] = useLocation()

  function handleClick (): void {
    setLocation(`/new/${value}`)
  }

  return (
    <li
      data-value={value}
      onClick={handleClick}
    >
      <Button>
        {content}
      </Button>
    </li>
  )
}
