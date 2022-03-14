const numbers = [1,2,3,4,5];

const numbersDouble = numbers.map(double);

function double(value, index, arr){
    return (value*2);
}
console.log(numbersDouble);

const var1 = numbers.map(multiply);
function multiply(value, index, arr){
    return(value*index);
}
console.log(var1);

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    }, {
        name: 'desktop',
        price: 1500,
        count: 2
    }, {
        name: 'phone',
        price: 500,
        count: 10
    }
];
const totalproductsvalue = products.map(item => item.price*item.count);
const items_and_totalprodvalue = products.map(item => ({name: item.name, totalValue: item.price*item.count}));
console.log(totalproductsvalue);
console.log(items_and_totalprodvalue);


// converting array of strings to array of numbers.
const str = ['1', '2', '3', '4', '5'];
const numbers2 = str.map(Number);
const numbers1 = str.map(item => Number(item));
console.log(numbers2);
console.log(numbers1);

