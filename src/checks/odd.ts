import { CheckNumber } from '../types'

/** https://en.wikipedia.org/wiki/Parity_(mathematics) */
export const checkOdd: CheckNumber = (n) => n % 2 !== 0
