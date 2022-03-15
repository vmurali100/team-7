const a = [1,2,3];
const b = [4,5,6];
const d = [7,8,9];

const c = a.concat(b,d);
console.log(c);
// original arrays a,b and d remain unchanged.
// we can also use the concat method as a push method.

const k = a.concat(4,7);
console.log(k);