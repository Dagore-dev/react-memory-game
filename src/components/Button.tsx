interface Props {
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button (props: Props): JSX.Element {
  const { children, onClick } = props

  return (
    <button
      className='text-center font-black text-fuchsia-500 w-56 rounded m-4 bg-[var(--option-color)] hover:scale-105 shadow'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
