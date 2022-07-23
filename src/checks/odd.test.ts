import { checkOdd } from './odd'

test('odd', () => {
  expect(checkOdd(-100)).toBeFalsy()
  expect(checkOdd(-1)).toBeTruthy()
  expect(checkOdd(0)).toBeFalsy()
  expect(checkOdd(1)).toBeTruthy()
  expect(checkOdd(100)).toBeFalsy()
})
