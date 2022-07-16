import defaults from '../defaults'
import { iterateMember } from '../iterate'
import { Sequence, SequenceFirst, SequenceMember } from '../types'

export const naturalFirst: SequenceFirst = 1

/** http://oeis.org/A000027 */
export const naturalMember: SequenceMember = (nth) => nth

/** http://oeis.org/A000027 */
export const naturalSequence: Sequence = (nth = naturalFirst, length = defaults.sequenceLength) => {
  return iterateMember(naturalMember, nth, length)
}
