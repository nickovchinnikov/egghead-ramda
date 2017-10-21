import {zipObj, zip, fromPairs, compose} from 'ramda';

const getName = _ => Promise.resolve('Andrew');
const getHobbies = _ => Promise.resolve(['kayaking', 'woodworking', 'screencasting']);

Promise.all(getName(), getHobbies())
    .then(compose(fromPairs, zip('name', 'hobbies')))
    .then(console.log);

Promise.all(getName(), getHobbies())
    .then(zipObj('name', 'hobbies'))
    .then(console.log);
