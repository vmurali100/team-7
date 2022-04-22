import React, { Component } from 'react'
import axios from 'axios'

export default class User_Server1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                fname: "",
                lname: "",
                mail: "",
                city: ""
            },
            AllUser: [],
            sIndex: null
        }
    }


    AllData = (e) => {
        let NewUser = { ...this.state.User }
        NewUser[e.target.name] = e.target.value
        this.setState({ User: NewUser })
    }

    HandleSubmit = () => {
        axios.post("http://localhost:3000/my", this.state.User).then(() => {
            console.log("Successfully Complited")
            this.GetDataFromServer()
            this.ClearForm()
        })
    }

    GetDataFromServer = () => {
        axios.get("http://localhost:3000/my").then((res) => {
            console.log("responce", res)
            this.setState({ AllUser: res.data })
        })
    }

    componentDidMount = () => {
        this.GetDataFromServer()
    }

    ClearForm = () => {
        this.setState({
            User: {
                fname: "",
                lname: "",
                mail: "",
                city: ""
            }
        })
    }

    HandleEdit = (i) => {
        this.setState({ User: this.state.AllUser[i] })
        this.setState({ sIndex: i })
    }

    HandleDelete = (i) => { 
        axios.delete("http://localhost:3000/my/"+this.state.AllUser[i].id).then(()=>{
            this.GetDataFromServer()
        })
    }

    HandleUpdate = () => { 
        axios.put("http://localhost:3000/my/"+this.state.User.id,this.state.User).then(()=>{
            this.GetDataFromServer()
            this.ClearForm()
            this.setState({sIndex:null})
        })
    }

    render() {
        let { fname, lname, mail, city } = this.state.User
        return (
            <div className='Container'>
                <div className='Parent1'>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="fname" id="" value={fname} onChange={(e) => { this.AllData(e) }} />

                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lname" id="" value={lname} onChange={(e) => { this.AllData(e) }} />

                    <label htmlFor="">E-Mail</label>
                    <input type="text" name="mail" id="" value={mail} onChange={(e) => { this.AllData(e) }} />

                    <label htmlFor="">City</label>
                    <input type="text" name="city" id="" value={city} onChange={(e) => { this.AllData(e) }} />
                    {this.state.sIndex !== null ? <button type='button' onClick={this.HandleUpdate}>update</button> : <button type='button' onClick={this.HandleSubmit}>submit</button>}

                </div>
                <div className='Parent2'>
                    <table>
                        <thead>
                            <tr>
                                <th>S no</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>E-Mail</th>
                                <th>City</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.AllUser.map((Rehaman, i) => {
                                return <tr>
                                    <td>{Rehaman.fname}</td>
                                    <td>{Rehaman.lname}</td>
                                    <td>{Rehaman.mail}</td>
                                    <td>{Rehaman.city}</td>
                                    <td><button className='btn btn-warning' onClick={() => { this.HandleEdit(i) }}>Edit</button></td>
                                    <td><button className='btn btn-danger' onClick={() => { this.HandleDelete(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
