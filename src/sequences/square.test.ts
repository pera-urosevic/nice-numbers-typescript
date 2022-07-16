import { squareSequence } from './square'

test('square', () => {
  expect(squareSequence()).toStrictEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
})
