import { checkCube } from './cube'

test('cube', () => {
  expect(checkCube(-8)).toBeTruthy()
  expect(checkCube(-2)).toBeFalsy()
  expect(checkCube(-1)).toBeTruthy()
  expect(checkCube(0)).toBeTruthy()
  expect(checkCube(1)).toBeTruthy()
  expect(checkCube(2)).toBeFalsy()
  expect(checkCube(8)).toBeTruthy()
})
