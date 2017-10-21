//const R = require('ramda')
const {unfold, curry} = R;

const throughNByOne = curry((limit, n) => n > limit ? false : [n, n+1]);
const throughNBaseTwo = curry((limit, n) => n > limit ? false : [n, n*2]);
// const result = unfold(throughNByOne(15), 3)

const result = unfold(throughNBaseTwo(256), 2);
console.log(result);