import { powers2Sequence } from './powers2'

test('powers2', () => {
  expect(powers2Sequence()).toStrictEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512])
})
