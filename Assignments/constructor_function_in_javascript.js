function Alien(name, tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        console.log("Practicing javascript from 6 hours");
    }
}
let alien1 = new Alien('Navin', 'JS');
let alien2 = new Alien('Kiran', 'Java');
alien1.tech = 'Blockchain technology';
console.log(alien1);


alien1.work();
