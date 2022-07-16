import { oddSequence } from './odd'

test('odd', () => {
  expect(oddSequence()).toStrictEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
})
