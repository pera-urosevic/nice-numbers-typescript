import { checkAnswer } from './answer'

test('answer', () => {
  expect(checkAnswer(6 * 9)).toBeFalsy()
  expect(checkAnswer(42)).toBeTruthy()
})
