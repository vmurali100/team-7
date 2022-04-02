import { Component } from "react";

export default class ClassCompState extends Component {
    constructor() {
        super()
        // Creating An Object 
        // Creating An Array
        // Creating a Simple String

        // We have to Create A state Object

        this.state = {
            message: "Welcome to Class Component .. ",
            person: {
                fname: "Murali",
                lname: "Krishna",
                email: "murali@gmail.com"
            },
            students:["Raju","Surya","Rahman","Deena","Sadik"]
        }
    }
    render() {
        // Taking Object Propertie with Destructure method
        // let { fname, lname, email } = this.state.person
        let { person,students } = this.state
        return <div>
            <h2>{this.state.message}</h2>
            {/* <ul>
                <li>{fname}</li>
                <li>{lname}</li>
                <li>{email}</li>
            </ul> */}
            <ul>
                {Object.values(person).map((val,i)=>{
                    console.log(i)
                    return <li key={i}>{val}</li>
                })}
            </ul>

            <ul>
                {students.map((std,i)=>{
                    return <li key={i}>{std}</li>
                })}
            </ul>
        </div>
    }
}