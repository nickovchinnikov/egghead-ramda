// const R = require('ramda')
const products = [
  {name: 'Jeans', price:80, category: 'clothes', stock: 100},
  {name: 'Hoodie', price:50, category: 'clothes', stock: 20},
  {name: 'Sneakers', price:120, category: 'clothes', stock: 30},
  {name: 'Cards', price: 35, category: 'games', stock: 10},
  {name: 'iPhone', price: 649, category: 'electronics', stock: 5},
  {name: 'Sauce Pan', price: 100, category: 'housewares', stock: 200}
  ]

const predicate = R.where({
  category: R.equals('clothes'),
  stock: R.lt(R.__, 50),
  price: R.lt(R.__, 100)
})

const getResults = R.pipe(R.filter(predicate), R.pluck('name'))
const result = getResults(products)
console.log(result)

document.getElementById('output').innerHTML = `${JSON.stringify(result)}`
