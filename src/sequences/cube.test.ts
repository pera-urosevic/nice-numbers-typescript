import { cubeSequence } from './cube'

test('cube', () => {
  expect(cubeSequence()).toStrictEqual([1, 8, 27, 64, 125, 216, 343, 512, 729, 1000])
})
