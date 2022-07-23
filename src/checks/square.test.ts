import { checkSquare } from './square'

test('square', () => {
  expect(checkSquare(-1)).toBeFalsy()
  expect(checkSquare(0)).toBeTruthy()
  expect(checkSquare(1)).toBeTruthy()
  expect(checkSquare(2)).toBeFalsy()
  expect(checkSquare(3)).toBeFalsy()
  expect(checkSquare(4)).toBeTruthy()
})
