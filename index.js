const { differenceBy } = require('lodash');
const { followers } = require('./followers');
const { following } = require('./following');

const resultList = differenceBy(following, followers);

console.log('================================');
resultList.forEach((value, i) => console.log(`${i + 1}: ${value}`));
console.log('================================');