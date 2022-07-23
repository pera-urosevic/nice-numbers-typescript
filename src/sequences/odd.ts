import defaults from '../defaults'
import { iterateMember } from './iterate'
import { Sequence, SequenceFirst, SequenceMember } from '../types'

export const oddFirst: SequenceFirst = 0

/** http://oeis.org/A005408 */
export const oddMember: SequenceMember = (nth) => 2 * nth + 1

/** http://oeis.org/A005408 */
export const oddSequence: Sequence = (nth = oddFirst, length = defaults.sequenceLength) => {
  return iterateMember(oddMember, nth, length)
}
