import { Component } from "react";

export default class ArrayMethod extends Component{
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
        let {User} = this.state  
        return <div>
            <ul>
                {Object.values(User).map((val,i)=>{
                   return <li key={i}>{val}</li>
                })}
            </ul>
        </div>
    }
}