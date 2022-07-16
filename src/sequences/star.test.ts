import { starSequence } from './star'

test('star', () => {
  expect(starSequence()).toStrictEqual([1, 13, 37, 73, 121, 181, 253, 337, 433, 541])
})
