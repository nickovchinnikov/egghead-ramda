const {toPairs, map, join, compose, concat} = R;

const qsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse:"value"
};

// '?page=2&pageSize=10&total=205&somethingElse=value'
const createQs = compose(
    concat('?'),
    join('&'),
    map(join('=')),
    toPairs
);

const result = createQs(qsObj);
console.log(result);