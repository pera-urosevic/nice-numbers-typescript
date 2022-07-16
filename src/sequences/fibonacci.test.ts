import { fibonacciSequence } from './fibonacci'

test('fibonacci', () => {
  expect(fibonacciSequence()).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})
