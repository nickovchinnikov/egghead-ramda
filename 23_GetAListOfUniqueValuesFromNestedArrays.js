// make console.log write to the page for better in-browser experience
(function () {
    var body = document.querySelector('body');
    body.style['fontFamily'] = 'monospace';
    body.style['fontSize'] = '2em';
    console.log = function (x) { body.innerText += x + '\n'; };
}());

// const R = require('ramda')
const {prop, compose, pluck, chain, uniq} = R

const product = {
    name: "Sample Data",
    sizes: [
        {
            name: "L",
            colors: [
                {
                    name: "Red"
                },
                {
                    name: "Blue"
                }
            ]
        },
        {
            name: "M",
            colors: [
                {
                    name: "Green"
                },
                {
                    name: "Yellow"
                }
            ]
        },
        {
            name: "S",
            colors: [
                {
                    name: "Orange"
                },
                {
                    name: "Purple"
                },
                {
                    name: "Blue"
                }
            ]
        }
    ]
}

const getSizes = prop('sizes')
const getColors = chain(prop('colors'))
const getColorNames = pluck('name')

const getUniqueColors = compose(uniq, getColorNames, getColors, getSizes)

const result = getUniqueColors(product)
console.log(result)