import { Component } from "react";

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: ""
            }
        }
    }
    handleChange = (e) => {

        let newPerson = { ...this.state.person }
        newPerson[e.target.name] = e.target.value
        this.setState({ person: newPerson })
    }

    handleSubmit = () => {
        console.log(this.state.person)
    }
    render() {
        return <>
            <label htmlFor="fname">First Name :</label>
            <input type="text" name="fname" value={this.state.fname} onChange={(e) => { this.handleChange(e) }} /> <br /> <br />

            <label htmlFor="fname">Last Name :</label>

            <input type="text" name="lname" value={this.state.lname} onChange={(e) => { this.handleChange(e) }} /> <br /> <br />
            <label htmlFor="fname">Email:</label>

            <input type="text" name="email" value={this.state.email} onChange={(e) => { this.handleChange(e) }} /> <br />

            <button onClick={this.handleSubmit}>Get User</button>
        </>
    }
}