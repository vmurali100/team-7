import { Component } from "react";

export default class ObjectComp extends Component{
    constructor(){
        super()
        this.state = {
            User : {
                fname:"Sayed",
                lname:"Rehaman",
                age:"24 years",
                mail:"sayedrehaman456@gmail.com"
            }
        }
    }
    render(){
        let { fname, lname, age, mail} = this.state.User
        return <div>
            <ul>
                <li>{fname}</li>
                <li>{lname}</li>
                <li>{age}</li>
                <li>{mail}</li>
            </ul>
        </div>
    }
}