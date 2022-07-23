import defaults from '../defaults'
import { iterateNext } from './iterate'
import { Sequence, SequenceFirst, SequenceMember, SequenceNext } from '../types'

export const powers2First: SequenceFirst = 0

/** https://oeis.org/A000079 */
export const powers2Member: SequenceMember = (nth) => Math.pow(2, nth)

/** https://oeis.org/A000079 */
export const powers2Next: SequenceNext = (membersPrevious, nth) => {
  return membersPrevious[membersPrevious.length - 1] * 2
}

/** https://oeis.org/A000079 */
export const powers2Sequence: Sequence = (nth = powers2First, length = defaults.sequenceLength) => {
  const sequenceInitial = [powers2Member(nth)]
  return iterateNext(sequenceInitial, powers2Next, nth + 1, length - 1)
}
