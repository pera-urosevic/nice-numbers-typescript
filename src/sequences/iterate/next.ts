import { SequenceNext } from '../../types'

export const iterateNext = (initial: number[], sequenceNext: SequenceNext, start: number, length: number) => {
  const end = start + length
  const items: number[] = initial
  for (let i = start; i < end; i++) {
    const next = sequenceNext(items, i)
    items.push(next)
  }
  return items
}
