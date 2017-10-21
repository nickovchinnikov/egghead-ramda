// const R = require('ramda')

const add = R.curryN(2, (a, b) => a + b)
const mult = a => b => a * b
const multiply = R.uncurryN(2, mult)
const inc = add(1)

const result = multiply(2, 4)
console.log(result)
document.getElementById('output').innerHTML = `${JSON.stringify(result)}`
