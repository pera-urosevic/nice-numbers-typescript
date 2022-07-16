import { Sequence, SequenceFirst, SequenceMember, SequenceNext } from '../types'
import { iterateMember } from '../iterate'
import defaults from '../defaults'

export const squareFirst: SequenceFirst = 1

/** http://oeis.org/A000290 */
export const squareMember: SequenceMember = (nth) => nth * nth

/** http://oeis.org/A000290 */
export const squareSequence: Sequence = (nth = squareFirst, length = defaults.sequenceLength) => {
  return iterateMember(squareMember, nth, length)
}
