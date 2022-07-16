import defaults from '../defaults'
import { iterateMember } from '../iterate'
import { Sequence, SequenceFirst, SequenceMember } from '../types'

export const evenFirst: SequenceFirst = 0

/** http://oeis.org/A005843 */
export const evenMember: SequenceMember = (nth) => 2 * nth

/** http://oeis.org/A005843 */
export const evenSequence: Sequence = (nth = evenFirst, length = defaults.sequenceLength) => {
  return iterateMember(evenMember, nth, length)
}
