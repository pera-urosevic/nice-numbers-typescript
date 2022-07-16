import { naturalSequence } from './natural'

test('natural', () => {
  expect(naturalSequence()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
