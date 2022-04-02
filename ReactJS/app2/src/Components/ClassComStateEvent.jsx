import { Component } from "react";

export default class ClassCompStateEvent extends Component {
    constructor() {
        super()
        // Creating An Object 
        // Creating An Array
        // Creating a Simple String

        // We have to Create A state Object

        this.state = {
            message: "",
            person: {},
            students: []
        }
    }
    showMessage = () => {
        let newState = { ...this.state }; // Need to Take the copy of the State
        newState.message = "HELLO , I GOT CHANGED FROM SET STATE METHOD" // Assigning new Value to the Message
        this.setState(newState); // Updating the Existing State
    }

    showPerson = () => {
        let newState = { ...this.state }; // Need to Take the copy of the State
        newState.person = {
            fname: "Murali",
            lname: "Krishna",
            email: "murali@gmail.com"
        }
        this.setState(newState)
    }

    showStudents = () => {
        let newState = { ...this.state }; // Need to Take the copy of the State
        newState.students = ["Raju", "Surya", "Rahman", "Deena", "Sadik"]
        this.setState(newState)

    }
    render() {
        // Taking Object Propertie with Destructure method
        // let { fname, lname, email } = this.state.person


        let { person, students } = this.state
        return <div>
            <button onClick={this.showMessage}>Show Message</button>
            <h2>{this.state.message}</h2>
            <hr />
            <button onClick={this.showPerson}>Show Person</button>
            <ul>
                {Object.values(person).map((val, i) => {
                    console.log(i)
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <hr />
            <button onClick={this.showStudents}>Show Students</button>
            <ul>
                {students.map((std, i) => {
                    return <li key={i}>{std}</li>
                })}
            </ul>
        </div>
    }
}