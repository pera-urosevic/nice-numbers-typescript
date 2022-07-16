import { factorialSequence } from './factorial'

test('factorial', () => {
  expect(factorialSequence()).toStrictEqual([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880])
})
