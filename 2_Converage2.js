import console from './console'

const shouldBeTrue = [6, 3, 4, 5, 2, 1]
const shouldBeFalse = [3, 4, 5, 2, 1]

import { converge, equals, head, sort, descend, identity, compose } from 'ramda'

const biggestItem = compose(head, (sort(descend(identity))))

const isFirstBiggest = converge(
    equals, [
        head,
        biggestItem
    ])

// xs =>
//     xs[0] == xs.sort((a, b) => b - a)[0]



console.log(isFirstBiggest(shouldBeTrue))
console.log(isFirstBiggest(shouldBeFalse))
