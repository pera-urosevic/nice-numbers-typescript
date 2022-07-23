import { SequenceMember } from '../../types'

export const iterateMember = (sequenceMember: SequenceMember, start: number, length: number): number[] => {
  const end = start + length
  const items: number[] = []
  for (let i = start; i < end; i++) {
    const item = sequenceMember(i)
    items.push(item)
  }
  return items
}
