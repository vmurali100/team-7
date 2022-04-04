import { Component } from "react";

export default class ClassCompState extends Component{
    constructor(){
        super()
        this.state = {
            message :"Hii Friends Good Evening to all..:)",
            User : {
                fname:"Sayed",
                lname:"Rehaman",
                age:"24 years",
                mail:"sayedrehaman456@gmail.com"
            },
            Friends : ["Sadik","Deena","Raju","Surya","Rehaman"]
        }
    }

    render(){
        let {User,Friends} = this.state
        return <div>
            <h2>{this.state.message}</h2>

            {Object.values(User).map((Data)=>{
                return <li>{Data}</li>
            })}

            {Friends.map((Name,i)=>{
                return <h3 key={i}>{Name}</h3>
            })}
        </div>
    }
}