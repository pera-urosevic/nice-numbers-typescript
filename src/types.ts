export type CheckNumber = (n: number) => boolean

export type Sequence = (start?: number, length?: number) => number[]
export type SequenceFirst = number
export type SequenceMember = (nth: number) => number
export type SequenceNext = (membersPrevious: number[], nth: number) => number
