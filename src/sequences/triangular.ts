import defaults from '../defaults'
import { iterateNext } from '../iterate'
import { Sequence, SequenceFirst, SequenceMember, SequenceNext } from '../types'

export const triangularFirst: SequenceFirst = 0

/** https://oeis.org/A000217 */
export const triangularMember: SequenceMember = (nth) => (nth * (nth + 1)) / 2

/** https://oeis.org/A000217 */
export const triangularNext: SequenceNext = (membersPrevious, nth) => {
  return membersPrevious[membersPrevious.length - 1] + nth
}

/** https://oeis.org/A000217 */
export const triangularSequence: Sequence = (nth = triangularFirst, length = defaults.sequenceLength) => {
  const sequenceInitial = [triangularMember(nth)]
  return iterateNext(sequenceInitial, triangularNext, nth + 1, length - 1)
}
