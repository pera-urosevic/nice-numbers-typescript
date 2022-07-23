import { checkFactorial } from './factorial'

test('factorial', () => {
  expect(checkFactorial(-1)).toBeFalsy()
  expect(checkFactorial(0)).toBeFalsy()
  expect(checkFactorial(1)).toBeTruthy()
  expect(checkFactorial(2)).toBeTruthy()
  expect(checkFactorial(3)).toBeFalsy()
  expect(checkFactorial(5)).toBeFalsy()
  expect(checkFactorial(6)).toBeTruthy()
  expect(checkFactorial(100)).toBeFalsy()
  expect(checkFactorial(120)).toBeTruthy()
})
