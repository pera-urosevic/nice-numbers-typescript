import { CheckNumber } from '../types'
import { checkSquare } from './square'

/** https://en.wikipedia.org/wiki/Fibonacci_number */
export const checkFibonacci: CheckNumber = (n) => {
  if (n < 0) return false
  return checkSquare(5 * n * n + 4) || checkSquare(5 * n * n - 4)
}
