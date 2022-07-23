import { checkNegative } from './negative'

test('negative', () => {
  expect(checkNegative(1)).toBeFalsy()
  expect(checkNegative(0)).toBeFalsy()
  expect(checkNegative(-1)).toBeTruthy()
  expect(checkNegative(-100)).toBeTruthy()
})
