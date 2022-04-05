import { Component } from "react";
import { Raj } from "./ChildComp";


export class HaHa extends Component {
    constructor() {
        super()
        this.Student = {
            fname: "Sayed",
            lname: "Rehaman",
            mail: "Sayedrehaman456@gmail.com",
            age: "23 years",
            city: "Chittoor",
            state: "Andhra Pradesh"
        }
    }
    render(){
        return <Raj Data = {this.Student}/>
    }
}
