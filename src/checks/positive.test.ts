import { checkPositive } from './positive'

test('positive', () => {
  expect(checkPositive(-1)).toBeFalsy()
  expect(checkPositive(0)).toBeFalsy()
  expect(checkPositive(1)).toBeTruthy()
  expect(checkPositive(100)).toBeTruthy()
})
