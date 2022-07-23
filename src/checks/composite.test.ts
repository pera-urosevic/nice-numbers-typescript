import { checkComposite } from './composite'

test('composite', () => {
  expect(checkComposite(-1)).toBeFalsy()
  expect(checkComposite(0)).toBeFalsy()
  expect(checkComposite(1)).toBeFalsy()
  expect(checkComposite(2)).toBeFalsy()
  expect(checkComposite(3)).toBeFalsy()
  expect(checkComposite(4)).toBeTruthy()
  expect(checkComposite(9007199254740991)).toBeTruthy()
})
