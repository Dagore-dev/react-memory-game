import { randomIntegerBetween } from '../utils/randomInteger'
import { shuffleArray } from '../utils/shuffleArray'

export default function getBoardContent (level: number): Array<{ value: string, matched: boolean }> {
  const firstFruit = 127815
  const lastFruit = 127827
  const numberOfFruits = getNumberOfFruits(level)
  const fruitsSet: Set<number> = new Set()

  while (fruitsSet.size < (numberOfFruits / 2)) {
    const randomFruit = randomIntegerBetween(firstFruit, lastFruit)
    fruitsSet.add(randomFruit)
  }

  return encodeDuplicateAndShuffle(Array.from(fruitsSet)).map(fruit => { return { value: fruit, matched: false } })
}

function getNumberOfFruits (level: number): number {
  switch (level) {
    case 0:
      return 8
    case 1:
      return 16
    default:
      return 24
  }
}

function encodeDuplicateAndShuffle (fruits: number[]): string[] {
  const encodedAndDuplicatedFruits: string[] = []

  for (const fruit of fruits) {
    const encodedFruit = String.fromCodePoint(fruit)
    encodedAndDuplicatedFruits.push(encodedFruit, encodedFruit)
  }

  return shuffleArray(encodedAndDuplicatedFruits)
}
