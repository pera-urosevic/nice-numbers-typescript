import { checkPrime } from './prime'

test('prime', () => {
  expect(checkPrime(-1)).toBeFalsy()
  expect(checkPrime(0)).toBeFalsy()
  expect(checkPrime(1)).toBeFalsy()
  expect(checkPrime(2)).toBeTruthy()
  expect(checkPrime(3)).toBeTruthy()
  expect(checkPrime(4)).toBeFalsy()
  expect(checkPrime(9007199254740881)).toBeTruthy()
})
