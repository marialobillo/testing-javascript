const { add } = require('./index')


const result = add(5,6)

if(result != 11){
  throw new Error('The add function was not working well')
}
