import { triangularSequence } from './triangular'

test('triangular', () => {
  expect(triangularSequence()).toStrictEqual([0, 1, 3, 6, 10, 15, 21, 28, 36, 45])
})
