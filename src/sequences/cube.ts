import { Sequence, SequenceFirst, SequenceMember } from '../types'
import { iterateMember } from './iterate'
import defaults from '../defaults'

export const cubeFirst: SequenceFirst = 1

/** http://oeis.org/A000578 */
export const cubeMember: SequenceMember = (nth) => nth * nth * nth

/** http://oeis.org/A000578 */
export const cubeSequence: Sequence = (nth = cubeFirst, length = defaults.sequenceLength) => {
  return iterateMember(cubeMember, nth, length)
}
