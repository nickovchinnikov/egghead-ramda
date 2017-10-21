const {prop, sort, sortWith, ascend, descend } = R;

const sample = [
    {name: "Sally", age: 29, height: 65},
    {name: "Zac", age: 29, height: 72},
    {name: "John", age: 32, height: 61},
    {name: "Lisa", age: 28, height: 63},
    {name: "Bob", age: 29, height: 66},
    {name: "Allen", age: 29, height: 66}
];

const result = sortWith([
    descend(prop('height')),
    ascend(prop('age')),
    ascend(prop('name'))
], sample);

console.log(result);