// we don't need to require in Plunker!
const R = require('ramda')

const product = {
    name: 'widget',
    price: 10,
    avgRating: 4.5,
    shippingWeight: '2 lbs',
    shippingCost: 2,
    shippingMethod: 'UPS'
};

// const getProps = R.pickAll(['name', 'price', 'category']);
// const getProps = R.pickBy(val => Number(val));
// const getProps = R.pickBy((val, key) => R.contains('shipping', key));
// const getProps = R.omit(['shippingWeight', 'shippingCost']);
const getProps = R.pickBy((val, key) => !R.contains('shipping', key));

const result = getProps(product);

console.log(result);

document.getElementById('output').innerHTML = `Top team is ${result}`;