const has = require('../src/index')

describe('Index testing', () => {
  test('should return error if no args', () => {
    const args = ['0', '1']
    expect(() => has(args)).toThrowError()
  })
})