// we don't need to require in Plunker!
const R = require('ramda')

const pets = [
    {name: 'Spike', type: 'dog'},
    {name: 'Mittens', type: 'cat'},
    {name: 'Rover', type: 'dog'},
    {name: 'Fluffy', type: 'cat'},
    {name: 'Fido', type: 'dog'}
]

const dogCheck = pet => pet.type === 'dog';

// const result = R.filter(dogCheck, pets)
// const result = R.reject(dogCheck, pets)

const result = R.partition(dogCheck, pets);

console.log(result);
document.getElementById('output').innerHTML = `${JSON.stringify(result)}`;