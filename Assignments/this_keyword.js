let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    getConfig: function(){
        // console.log(cpu);
        // It will not be able to access cpu variable since it is the property of an object.
        console.log(laptop1.cpu);
    }
}
let laptop2 = {
    cpu: 'i7',
    ram: 16,
    brand: 'HP',
    getConfig: function(){
        // console.log(cpu);
        // It will not be able to access cpu variable since it is the property of an object.
        console.log(this.cpu);
    }
}
laptop1.getConfig();
laptop2.getConfig();
// 'this' refers to the "Current object calling the variable/method".