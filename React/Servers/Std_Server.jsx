
import React, { Component } from 'react'
import axios from 'axios'

export default class Form1_Server extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                Name: "",
                Username: "",
                EmailAddress: "",
                Password: "",
                ConfirmPass: "",
            },
            AllData: [],
            sIndex: null
        }
    }
    HandleChange = (e) => {
        let NewUser = { ...this.state.User }
        NewUser[e.target.name] = e.target.value
        this.setState({ User: NewUser })
    }

    DataSubmit = () => {
        axios.post("http://localhost:3000/Sun", this.state.User).then(() => {
            console.log("Complited Successfully")
            this.getDataFromServer()
            this.AllClear()
        })
    }

    getDataFromServer = () => {
        axios.get("http://localhost:3000/Sun").then((res) => {
            console.log("response", res)
            this.setState({ AllData: res.data })
        })
    }

    AllClear = () => {
        this.setState({
            User: {
                Name: "",
                Username: "",
                EmailAddress: "",
                Password: "",
                ConfirmPass: ""
            }
        })
    }

    EditBtn = (i) => {
        this.setState({ User: this.state.AllData[i] })
        this.setState({ sIndex: i })
    }

    UpdateBtn = () => {
        axios.put("http://localhost:3000/Sun/" + this.state.User.id, this.state.User).then(() => {
            this.getDataFromServer()
            this.AllClear()
            this.setState({ sIndex: null })
        })
    }

    DeleteBtn = (i) => {
        axios.delete("http://localhost:3000/Sun/" + this.state.AllData[i].id).then(() => {
            this.getDataFromServer()
        })
    }

    componentDidMount() {
        this.getDataFromServer()
    }

    render() {
        let { Name, Username, EmailAddress, Password, ConfirmPass } = this.state.User
        return (
            <div className='BigParent'>
                <div className='ParentA1'>
                    <h3 id='A1'>Register your account</h3>
                    <div className='Child1'>
                        <table id='asd'>
                            <label htmlFor="">Name</label><br />
                            <input name="Name" type="text" id="" value={Name} onChange={(e) => { this.HandleChange(e) }} placeholder='Enter your full name...' /><br />

                            <label htmlFor="">Username</label><br />
                            <input type="text" name="Username" id="" value={Username} onChange={(e) => { this.HandleChange(e) }} placeholder='Enter a username...' /><br />

                            <label htmlFor="">Email address</label><br />
                            <input type="text" name="EmailAddress" id="" value={EmailAddress} onChange={(e) => { this.HandleChange(e) }} placeholder='Enter your email address...' /><br />

                            <label htmlFor="">Password</label><br />
                            <input type="text" name="Password" id="" value={Password} onChange={(e) => { this.HandleChange(e) }} placeholder='Enter your password...' /><br />

                            <label htmlFor="">Comfirm password</label><br />
                            <input type="text" name="ConfirmPass" id="" value={ConfirmPass} onChange={(e) => { this.HandleChange(e) }} placeholder='Enter your password again...' /><br /><br />

                            {this.state.sIndex ? <button type='button' id='az' onClick={this.UpdateBtn}>Update</button> : <button type='button' id='az' onClick={this.DataSubmit}>Sign up</button>}

                            <p>Already have an account?
                                <a href="https://getbootstrap.com/docs/5.1/content/tables/">Sign in.</a>
                            </p>
                        </table>
                    </div>
                </div>
                <div className='reaju'>
                    <table className="Ramu">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email address</th>
                                <th>Password</th>
                                <th>Comfirm password</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.AllData.map((Empty, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{Empty.Name}</td>
                                    <td>{Empty.Username}</td>
                                    <td>{Empty.EmailAddress}</td>
                                    <td>{Empty.Password}</td>
                                    <td>{Empty.ConfirmPass}</td>
                                    <td><button className="btn btn-primary" onClick={() => { this.EditBtn(i) }}>Edit</button></td>
                                    <td><button className="btn btn-primary active" aria-current="page" onClick={() => { this.DeleteBtn(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
