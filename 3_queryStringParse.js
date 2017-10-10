const {compose, fromPairs, map, split, tail} = R

const queryString = '?page=2&pageSize=10&total=203'

const parseQs = compose(fromPairs, map(split('=')), split('&'), tail)

const result = parseQs(queryString)
console.log(result)

document.getElementById('output').innerHTML = `${JSON.stringify(result)}`
