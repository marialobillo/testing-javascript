const { add } = require('index')
const mocha = require('mocha')

describe('The add function'. () => {

  it('should return 11 for arg 5 and 6', () => {
    const result = add(5, 6)
    const expected = 11

    assert.equal(result, expected)
  })

  it('should throw an error if arguments are not passed in', () => {
    assert.throw(() => {
      add()
    })
  })
})
