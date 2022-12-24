import { useLocation } from 'wouter'

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
      className='text-center font-black text-fuchsia-500 w-56 rounded mb-4 bg-[var(--option-color)] hover:scale-105 shadow'
    >
      {content}
    </li>
  )
}
