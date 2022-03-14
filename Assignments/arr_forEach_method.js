// foreach loop

const numbers = [1,2,3,4,5];
numbers.forEach((item,index,arr)=>{
    console.log('a[' + index + '] = ' + item);
    console.log(arr);
});

// calculating sum of the numbers from the array

let sum = 0;
const arr1 = [1,2,3,4,5];
arr1.forEach((item)=>{
    sum+=item;
});
console.log(sum);


const letters = ['a', 'b', 'c', 'd', 'a', 'b', 'c'];
let count = {};
letters.forEach(item =>{
    if(count[item]){
        count[item]++;
    } else {
        count[item] = 1;
    }
});
console.log(count);
