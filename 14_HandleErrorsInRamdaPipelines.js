// const R = require('ramda')
const person = {
    name: 'Sally Jones'
};

// alternate getName - using propOr to avoid the error
// const getName = R.propOr('Default', 'name')

const getName = R.tryCatch(R.prop('name'), R.always('Default'));
const getUpperName = R.pipe(getName, R.toUpper);
const result = getUpperName(person);
console.log(result);

document.getElementById('output').innerHTML = `${JSON.stringify(result)}`;