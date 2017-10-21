// make console.log write to the page for better in-browser experience
(function () {
    var body = document.querySelector('body');
    body.style['fontFamily'] = 'monospace';
    body.style['fontSize'] = '2em';
    console.log = function (x) { body.innerText += JSON.stringify(x) + '\n'; };
}());

//const R = require('ramda')
const {identity, compose, fromPairs, map, split, tail, tap} = R

const queryString = '?page=2&pageSize=10&total=203'
const log = tap(console.log)

const parseQs = compose(
    fromPairs,
    log,
    map(split('=')),
    log,
    split('&'),
    log,
    tail)

const result = parseQs(queryString)
console.log(result)