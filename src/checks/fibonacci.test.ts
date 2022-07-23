import { checkFibonacci } from './fibonacci'

test('fibonacci', () => {
  expect(checkFibonacci(-1)).toBeFalsy()
  expect(checkFibonacci(0)).toBeTruthy()
  expect(checkFibonacci(1)).toBeTruthy()
  expect(checkFibonacci(2)).toBeTruthy()
  expect(checkFibonacci(3)).toBeTruthy()
  expect(checkFibonacci(4)).toBeFalsy()
  expect(checkFibonacci(5)).toBeTruthy()
  expect(checkFibonacci(100)).toBeFalsy()
  expect(checkFibonacci(144)).toBeTruthy()
})
