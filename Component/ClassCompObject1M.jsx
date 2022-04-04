import { Component } from "react";

export default class ClassObject extends Component{
    constructor(){
        super()
        this.state = {
            Cars:{
                carName:"Kia",
                model:"Carens",
                price:"10,00,000",
                color:"Red",
                madein:"India"
            }
        }
    }
    render(){
        let {carName, model, price, color, madein} = this.state.Cars
        return <div>
            <h2>CarName : {carName}</h2>
            <h2>Model : {model}</h2>
            <h2>Price : {price}</h2>
            <h2>Color : {color}</h2>
            <h2>MadeIn : {madein}</h2>
        </div>
    }
}