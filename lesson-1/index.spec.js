const assert = require('assert')

const { add } = require('./index')


const actual = add(5,6)

const expected = 11


assert.equal(actual, expected)

console.log('Successfully ran all tests!')
