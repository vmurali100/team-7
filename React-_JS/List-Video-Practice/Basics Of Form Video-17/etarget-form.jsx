import { Component } from "react";

export  class Users extends Component {
    constructor() {
        super()
        this.state = {
            Resume: {
                fname: "",
                lname: "",
                age:"",
                Gender:"",
                Number:"",
                City:"",
                Address:"",
                PinCode:"",
                Qualifications:""
            }
        }
    }
    changing = (e) => {

        let newResume = { ...this.state.Resume }
        newResume[e.target.name] = e.target.value
        this.setState({ Resume: newResume })
    }

    submitted = () => {
        document.write(this.state.Resume)
    }
    render() {
        return <>
            <label htmlFor="fname">First Name :</label>
            <input type="text" name="fname" value={this.state.fname} onChange={(e) => { this.changing(e) }} /> <br /> <br />

            <label htmlFor="fname">Last Name :</label>
            <input type="text" name="lname" value={this.state.lname} onChange={(e) => { this.changing(e) }} /> <br /> <br />

            <label htmlFor="fname">Age:</label>
            <input type="text" name="age" value={this.state.Age} onChange={(e) => { this.changing(e) }} /> <br /><br />
            
            <label htmlFor="fname">Gender:</label>
            <input type="text" name="gender" value={this.state.Gender} onChange={(e) => { this.changing(e) }} /> <br /><br />
            
            <label htmlFor="fname">Number:</label>
            <input type="text" name="number" value={this.state.Number} onChange={(e) => { this.changing(e) }} /> <br /><br />
            
            <label htmlFor="fname">City:</label>
            <input type="text" name="city" value={this.state.City} onChange={(e) => { this.changing(e) }} /> <br /><br />
            
            <label htmlFor="fname">Address :</label>
            <input type="text" name="add" value={this.state.Address} onChange={(e) => { this.changing(e) }} /> <br /><br />
            
            <label htmlFor="fname">Pincode :</label>
            <input type="text" name="pin" value={this.state.Pincode} onChange={(e) => { this.changing(e) }} /> <br /><br />
            
            <label htmlFor="fname">Qualifications:</label>
            <input type="text" name="qualify" value={this.state.Qualifications} onChange={(e) => { this.changing(e) }} /> <br /><br />

            <button onClick={this.submitted}>Get User</button>
        </>
    }
}