import React, { useEffect, useState } from 'react'
import MemoryCard from './MemoryCard'

interface Props {
  elements: string[]
}

export default function Board (props: Props): JSX.Element {
  const { elements } = props
  const [choiceOne, setChoiceOne] = useState<string | undefined>()
  const [choiceTwo, setChoiceTwo] = useState<string | undefined>()

  // REMOVE LATER
  useEffect(() => {
    console.log('1:', choiceOne, '2:', choiceTwo)
  })

  function handleClick (e: React.MouseEvent): void {
    const { target } = e
    const div = target as HTMLDivElement
    const emoji = div.nextElementSibling?.textContent ?? undefined

    if (choiceOne != null) {
      setChoiceTwo(emoji)
    } else {
      setChoiceOne(emoji)
    }

    // REMOVE LATER
    console.log(emoji)
  }

  return (
    <div className='grid grid-cols-4 text-4xl gap-8'>
      {elements.map(element => {
        return (
          <MemoryCard
            key={crypto.randomUUID()}
            symbol={element}
            onClick={handleClick}
          />
        )
      })}
    </div>
  )
}
