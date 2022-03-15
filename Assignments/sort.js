const names = ['murali', 'deena', 'siva', 'rehman'];

numbers.sort();

console.log(names);

const numbers = [74, 18, 10, 5, 84, 24, 105];

numbers.sort(compareFunction);

function compareFunction(a,b){
    // 1. < 0... a comes first
    // 2. = 0...nothing will be changed
    // 3. >0...b comes first
    return a-b;
}
const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }

];
products.sort((a,b) =>{
    return b.price - a.price;
});
console.log(products);
