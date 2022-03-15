const numbers = [1,2,3,4,5,6,7,8];
const total = numbers.reduce(sum);
function sum(accumulator, value){
    return accumulator + value;
}
