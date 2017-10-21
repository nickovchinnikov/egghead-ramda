// make console.log write to the page for better in-browser experience
(function () {
    var body = document.querySelector('body');
    body.style['fontFamily'] = 'monospace';
    body.style['fontSize'] = '2em';
    console.log = function (x) { body.innerText += JSON.stringify(x) + '\n'; };
}());

// const R = require('ramda')
const {find, propEq, useWith, identity} = R;

const countries = [
    {cc: 'GB', flag: '🇬🇧'},
    {cc: 'US', flag: '🇺🇸'},
    {cc: 'CA', flag: '🇨🇦'},
    {cc: 'FR', flag: '🇫🇷'}
];

// const getCountry = (cc, list) => find(propEq('cc', cc), list)
const getCountry = useWith(find, [propEq('cc'), identity]);

const result = getCountry('FR', countries);
console.log(result);
