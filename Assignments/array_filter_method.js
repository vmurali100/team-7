// remove everyone below the age of 18

const people = [
    {
        name: 'murali',
        age: 40
    },
    {
        name: 'deenav',
        age: 21
    },
    {
        name: 'teja',
        age: 16
    }
]
const adults = people.filter(person => person.age<=18);
console.log(adults);

// Remove duplicates from this array:
const numbers = [1,2,3,2,1,3,3,4,5,6];
const nums = numbers.filter((value,index,arr) => {
    return arr.indexOf(value) === index;
});
console.log(nums);