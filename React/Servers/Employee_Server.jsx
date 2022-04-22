import axios from 'axios'
import React, { Component } from 'react'

export default class Employee_Server extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Employee: {
                fname: "",
                lname: "",
                mail: "",
                comment: "",
            },
            AllEmployee: [],
            sindex: null
        }
    }
    SubmitAll = (e) => {
        let NewEmp = { ...this.state.Employee }
        NewEmp[e.target.name] = e.target.value
        this.setState({ Employee: NewEmp })
    }

    SubmitBtn = () => {
        axios.post("http://localhost:3000/employee", this.state.Employee).then(() => {
            console.log("Success")
            this.getDataFRomServer()
            this.ClearForm()
        })
    }

    getDataFRomServer = () => {
        axios.get("  http://localhost:3000/employee").then((res) => {
            console.log("response", res)
            this.setState({ AllEmployee: res.data })
        })
    }

    componentDidMount = () => {
        this.getDataFRomServer()
    }

    ClearForm = () => {
        this.setState({
            Employee: {
                fname: "",
                lname: "",
                mail: "",
                comment: ""
            }
        })
    }

    ChangeDel = (i) => {
        axios.delete("http://localhost:3000/employee/"+this.state.AllEmployee[i].id).then(() => {
            this.getDataFRomServer()
        })
    }

    ChangeEdit = (i) => {
        this.setState({ Employee: this.state.AllEmployee[i] })
        this.setState({ sindex: i })
    }

    UpdateBtn = () => {
        axios.put("http://localhost:3000/employee/"+this.state.Employee.id, this.state.Employee).then(() => {
            this.getDataFRomServer()
            this.ClearForm()
            this.setState({ sindex: null })
        })
    }

    render() {
        let{fname,lname,mail,comment}=this.state.Employee
        return (
            <div>
                <div className='Child2b'>
                    <form>
                        <label htmlFor="">First Name :</label><br />
                        <input type="text" name="fname" id="" value={fname} onChange={(e) => { this.SubmitAll(e) }} placeholder="Enter First Name" /><br />

                        <label htmlFor="">Last Name :</label><br />
                        <input type="text" name="lname" id="" value={lname} onChange={(e) => { this.SubmitAll(e) }} placeholder="Enter Last Name" /><br />

                        <label htmlFor="">Email :</label><br />
                        <input type="text" name="mail" id="" value={mail} onChange={(e) => { this.SubmitAll(e) }} placeholder="Enter email" /><br />

                        <label htmlFor="">Comment :</label><br />
                        <input id="110" type="text" name="comment" value={comment} onChange={(e) => { this.SubmitAll(e) }} /><br /><br />

                        {this.state.sindex !== null ? <button type='button' id='ABC1' onClick={this.UpdateBtn}>Update</button> : <button type='button' id='ABC1' onClick={this.SubmitBtn}>Submit</button>}<br/><br/>

                    </form>
                </div>
                <div>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Comment</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.AllEmployee.map((Friend,i) => {
                                return <tr>
                                    <td>{Friend.fname}</td>
                                    <td>{Friend.lname}</td>
                                    <td>{Friend.mail}</td>
                                    <td>{Friend.comment}</td>
                                    <td><button className="btn btn-warning" onClick={() => { this.ChangeEdit(i) }}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => { this.ChangeDel(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
