import { ReactElement } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function PrimaryLayout (props: Props): ReactElement {
  const { children } = props
  return (
    <>
      <main className='min-h-screen bg-gradient-to-tl from-blue-400 grid place-items-center'>
        {children}
      </main>
    </>
  )
}
