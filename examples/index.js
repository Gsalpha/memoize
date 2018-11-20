import memoize from '../src'
const add = (x, y) => x + y
const memoizeAdd = memoize(add)
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(2, 3))
