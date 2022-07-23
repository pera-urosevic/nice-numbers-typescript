import { CheckNumber } from '../types'

/** https://en.wikipedia.org/wiki/Cube_(algebra) */
export const checkCube: CheckNumber = (n) => {
  const cubeRoot = Math.floor(Math.cbrt(n))
  return cubeRoot * cubeRoot * cubeRoot === n
}
