// we don't need to require in Plunker!
const R = require('ramda')

const teams = [
    {name: 'Lions', score: 5},
    {name: 'Tigers', score: 4},
    {name: 'Bears', score: 6},
    {name: 'Monkeys', score: 2},
];

const sortByScoreDesc = R.sort((a,b) => b.score - a.score);
const getName = R.prop('name');

const getTopName = R.pipe(
    sortByScoreDesc,
    R.head,
    getName
);

const result = getTopName(teams);
console.log(result);
document.getElementById('output').innerHTML = `Top team is ${result}`;