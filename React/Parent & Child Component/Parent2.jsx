import { Component } from "react";

export class Parent extends Component{
    constructor(){
        super()
        this.Cars = {
            CarName:"Kia",
            Model:"Carens",
            Price:"10,00,000",
            Color:"Black",
            Madein:"India",
            Seater:"7-1"
        }
    }
    render(){
        return <div>
            <h2>Car Name : {this.Cars.CarName}</h2>
            <h2>Model : {this.Cars.Model}</h2>
            <h2>Price : {this.Cars.Price}</h2>
            <h2>Color : {this.Cars.Color}</h2>
            <h2>Made In : {this.Cars.Madein}</h2>
            <h2>Seater : {this.Cars.Seater}</h2>
        </div>
    }
}