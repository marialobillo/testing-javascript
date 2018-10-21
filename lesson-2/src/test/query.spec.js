const assert = require('assert')
const { parse, stringify } = require('../query')


describe('The query function', function(){

  describe('The parse function', () => {
    it('should return an object of all query params when a query string is passed to it', () => {
        const query = '?by=kati-frantz&popular=true&category=nodejs';
        const actual = parse(query)
        const expectation = {
          by: 'kati-frantz',
          popular: 'true',
          category: 'nodejs'
        }

        assert.deepEqual(actual, expectation);
    })
  })
})

describe('The stringify function', () => {

  it('Should return a query string when an object is passed into it', () => {
    const query = 'by=kati'
    const actual = stringify(query)
    const expectation = '0=b&1=y&2==&3=k&4=a&5=t&6=i'
    assert.equal(actual, expectation)
  })
})
