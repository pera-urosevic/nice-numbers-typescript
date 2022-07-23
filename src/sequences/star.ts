import defaults from '../defaults'
import { iterateMember } from './iterate'
import { Sequence, SequenceFirst, SequenceMember } from '../types'

export const starFirst: SequenceFirst = 1

/** http://oeis.org/A003154 */
export const starMember: SequenceMember = (nth) => 6 * nth * (nth - 1) + 1

/** http://oeis.org/A003154 */
export const starSequence: Sequence = (nth = starFirst, length = defaults.sequenceLength) => {
  return iterateMember(starMember, nth, length)
}
