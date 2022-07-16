import { evenSequence } from './even'

test('even', () => {
  expect(evenSequence()).toStrictEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
})
