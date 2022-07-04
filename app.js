// menit 2:03:00
// https://www.youtube.com/watch?v=Oe421EPjeBE&t=2750s

const lodas = require("lodash");

const items = [1, [2, [3, 4]]];
const newItems = lodas.flatMapDeep(items);
console.log(newItems);
