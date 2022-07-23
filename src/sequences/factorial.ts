import defaults from '../defaults'
import { iterateNext } from './iterate'
import { Sequence, SequenceFirst, SequenceMember, SequenceNext } from '../types'

export const factorialFirst: SequenceFirst = 0

/** http://oeis.org/A000142 */
export const factorialMember: SequenceMember = (nth) => {
  if (nth === 0) return 1
  return nth * factorialMember(nth - 1)
}

/** http://oeis.org/A000142 */
export const factorialNext: SequenceNext = (membersPrevious, nth) => {
  return membersPrevious[membersPrevious.length - 1] * nth
}

/** http://oeis.org/A000142 */
export const factorialSequence: Sequence = (nth = factorialFirst, length = defaults.sequenceLength) => {
  const sequenceInitial = [factorialMember(nth)]
  return iterateNext(sequenceInitial, factorialNext, nth + 1, length - 1)
}
