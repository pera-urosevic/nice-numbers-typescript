import { CheckNumber } from '../types'

/** https://en.wikipedia.org/wiki/Square_number */
export const checkSquare: CheckNumber = (n) => {
  const squareRoot = Math.floor(Math.sqrt(n))
  return squareRoot * squareRoot === n
}
