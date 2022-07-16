import defaults from '../defaults'
import { iterateNext } from '../iterate'
import { Sequence, SequenceFirst, SequenceMember, SequenceNext } from '../types'

export const fibonacciFirst: SequenceFirst = 0

/** http://oeis.org/A000045 */
export const fibonacciMember: SequenceMember = (nth) => {
  if (nth === 0) return 0
  if (nth === 1) return 1
  return fibonacciMember(nth - 1) + fibonacciMember(nth - 2)
}

/** http://oeis.org/A000045 */
export const fibonacciNext: SequenceNext = (membersPrevious) => {
  return membersPrevious[membersPrevious.length - 2] + membersPrevious[membersPrevious.length - 1]
}

/** http://oeis.org/A000045 */
export const fibonacciSequence: Sequence = (nth = fibonacciFirst, length = defaults.sequenceLength) => {
  const sequenceInitial = [fibonacciMember(nth), fibonacciMember(nth + 1)]
  return iterateNext(sequenceInitial, fibonacciNext, nth + 2, length - 2)
}
