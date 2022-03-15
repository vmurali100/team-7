const numbers = [1,2,3,4,5];
const deleted = numbers.splice(2,3,6,7);
console.log(numbers);
console.log(deleted);
// splice method replaces an array, starting index and count are provided, and optionally new elements are also entered which would be placed
// inside of the array.

// returns an array with the removed items.
// above numbers and deleted both arrays would be changed.