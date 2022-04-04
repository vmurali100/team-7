import { Component } from "react";

export default class ClassEvent extends Component{
    constructor(){
        super()
        this.state = {
            message:"Hii Friends Good Evening to all..:)",
            User : {
                fname:"Sayed",
                lname:"Rehaman",
                age:"24 years",
                mail:"sayedrehaman456@gmail.com"
            },
            Friends : ["Sadik","Deena","Raju","Surya","Rehaman"]
        }
    }

    Hari = ()=>{
        let newState = {...this.state}
        newState.message = "Not a Good evening ,Good morning..."
        this.setState(newState)
    }

    Lalu = ()=>{
        let newState = {...this.state}
        newState.User = {
            carName:"Kia",
            model:"Carens",
            price:"10,00,000",
            color:"Red",
            madein:"India"
        }
        this.setState(newState)
    }

    Thaheer = ()=>{
        let newState = {...this.Friends}
        newState.Friends = ["Raj Kumar","Imram","Malik","Sai"]
        this.setState(newState)
    }

    render(){
        let {User,Friends} = this.state
        return <div>
            <button onClick={this.Hari}>Click</button>
            <h2>{this.state.message}</h2>
            <hr />

            <button onClick={this.Lalu}>Submit</button>
            {Object.values(User).map((Data)=>{
                return <li>{Data}</li>
            })}
            <hr />

            <button onClick={this.Thaheer}>Click on me</button>
            {Friends.map((Name,i)=>{
                return <h3 key={i}>{Name}</h3>
            })}
            <hr />
        </div>
    }
}