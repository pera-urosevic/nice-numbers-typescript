import { CheckNumber } from '../types'

/** https://en.wikipedia.org/wiki/Factorial */
export const checkFactorial: CheckNumber = (n) => {
  if (n < 1) return false
  if (n === 1) return true
  let i = 1
  while (true) {
    if (n % i === 0) {
      n = Math.floor(n / i)
      i++
    } else {
      return n === 1
    }
  }
}
