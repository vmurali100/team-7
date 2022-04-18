import './FormSample.css'
import React, { Component } from 'react'

export default class FormSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Employee: {
                fname: "",
                lname: "",
                mail: "",
                comment: "",
            },
            Info:[]
        }
    }
    SubmitAll = (e) => {
        let NewEmployee = { ...this.state.Employee }
        NewEmployee[e.target.name] = e.target.value
        this.setState({ Employee: NewEmployee })
    }
    SubmitButton = () => {
        let AllEmployees = [...this.state.Info]
        AllEmployees.push({...this.state.Employee})
        this.setState({Info:AllEmployees})
        this.ClearForm()
    }
    ClearForm=()=>{
        this.setState({
            Employee: {
                fname: "",
                lname: "",
                mail: "",
                comment: ""
            }
        })
    }
    ChangeDel=(i)=>{
        let DelBtn = this.state.Info.filter((Employee,index)=>{
            return i !== index            
        })
        this.setState({Info:DelBtn})
    }
    render() {
        return (
            <div className='Rehaman'>
                <div className='parent2'>
                    <div className='Child2a'>
                        <h2>Contact Us</h2>
                        <h3>We would love</h3>
                        <h3>to hear from</h3>
                        <h3>you !</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                    </div>
                    <div className='Child2b'>
                        <form>
                            <label htmlFor="">First Name :</label><br />
                            <input type="text" name="fname" id="" value={this.state.Employee.fname} onChange={(e) => { this.SubmitAll(e) }} placeholder="Enter First Name" /><br />

                            <label htmlFor="">Last Name :</label><br />
                            <input type="text" name="lname" id="" value={this.state.Employee.lname} onChange={(e) => { this.SubmitAll(e) }} placeholder="Enter Last Name" /><br />

                            <label htmlFor="">Email :</label><br />
                            <input type="text" name="mail" id="" value={this.state.Employee.mail} onChange={(e) => { this.SubmitAll(e) }} placeholder="Enter email" /><br />

                            <label htmlFor="">Comment :</label><br />
                            <input id="110" type="text" name="comment" value={this.state.Employee.comment} onChange={(e) => { this.SubmitAll(e) }} /><br /><br />

                            <button type='button' id='ABC1' onClick={this.SubmitButton}>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='Sadik'>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>s no</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Comment</th>           
                                <th>Edit</th>             
                                <th>Delete</th>        
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Info.map((Friend,i)=>{
                                return <tr>
                                    <td>{i+1}</td>
                                    <td>{Friend.fname}</td>
                                    <td>{Friend.lname}</td>
                                    <td>{Friend.mail}</td>
                                    <td>{Friend.comment}</td>
                                    <td><button className="btn btn-warning">Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>{this.ChangeDel(i)}}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

