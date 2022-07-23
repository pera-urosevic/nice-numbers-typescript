import { CheckNumber } from '../types'

/** https://en.wikipedia.org/wiki/Composite_number */
export const checkComposite: CheckNumber = (n) => {
  if (n <= 1) return false
  if (n <= 3) return false
  if (n % 2 === 0 || n % 3 === 0) return true
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return true
  }
  return false
}
