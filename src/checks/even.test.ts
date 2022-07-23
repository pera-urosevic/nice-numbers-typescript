import { checkEven } from './even'

test('even', () => {
  expect(checkEven(-100)).toBeTruthy()
  expect(checkEven(-1)).toBeFalsy()
  expect(checkEven(0)).toBeTruthy()
  expect(checkEven(1)).toBeFalsy()
  expect(checkEven(100)).toBeTruthy()
})
