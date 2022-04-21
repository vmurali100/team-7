import React, { Component } from 'react'

export default class Server extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Application: {
                fname: '',
                lname: '',
                username: '',
                mail: '',
                password: '',
                City: ''
            },
            AllApplies: [],

            Spindex: null
        }
    }

    componentDidMount = () => {
        let newuser = JSON.parse(localStorage.getItem("AllApplies"))
        if (newuser) {
            this.setState({ AllApplies: newuser })
        }
    }

    Clearform = () => {
        this.setState({
            Application: {
                fname: '',
                lname: '',
                username: '',
                mail: '',
                password: '',
                City: ''
            },
        })
    }

    handlingdata = (e) => {
        let newUser = { ...this.state.Application };
        newUser[e.target.name] = e.target.value;
        this.setState({ Application: newUser });
    }

    Edditng = (i) => {
        this.setState({ Application: this.state.AllApplies[i] })
        this.setState({ Spindex: i })
    }

    Deleting = (i) => {
        let Dele = this.state.AllApplies.filter((Dele,index) => {
            return i !== index
        });
        this.setState({ AllApplies: Dele })
    }

    submit = () => {
        let newuser = [...this.state.AllApplies]
        newuser.push ({ ...this.state.Application })
        this.setState({ AllApplies: newuser })
        localStorage.setItem("AllApplies", JSON.stringify(newuser))
        this.Clearform()
    }

    update = () => {
        let newuser = [...this.state.AllApplies]
        newuser[this.state.Spindex] = this.state.Application
        this.setState({ AllApplies: newuser, Spindex:null })
        localStorage.setItem("AllApplies", JSON.stringify(newuser))
        this.Clearform()
    }



    render() {

        let { fname, lname, username, mail, password, City } = this.state.Application

        return (
            <div>
                <form>
                    <tr>
                        <td><label htmlFor="">First Name :-</label></td>
                        <td><input type="text" name="fname" id="" value={fname} onChange={(e) => { this.handlingdata(e) }} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor=""> Last Name :-</label></td>
                        <td><input type="text" name="lname" id="" value={lname} onChange={(e) => { this.handlingdata(e) }} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">User Name :-</label></td>
                        <td><input type="text" name="username" id="" value={username} onChange={(e) => { this.handlingdata(e) }} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">Email :-</label></td>
                        <td><input type="text" name="mail" id="" value={mail} onChange={(e) => { this.handlingdata(e) }} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">Password :-</label></td>
                        <td><input type="text" name="password" id="" value={password} onChange={(e) => { this.handlingdata(e) }} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">City</label></td>
                        <td><input type="text" name="City" id="" value={City} onChange={(e) => { this.handlingdata(e) }} /></td>
                    </tr>
                </form>
                {this.state.Spindex ? <button type='button' onClick={this.update} >Update</button> : <button type='button' onClick={this.submit}>Submit</button>

                }

                <table border='1'>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.AllApplies.map((saroja, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{saroja.fname}</td>
                                <td>{saroja.lname}</td>
                                <td>{saroja.username}</td>
                                <td>{saroja.mail}</td>
                                <td>{saroja.password}</td>
                                <td>{saroja.City}</td>
                                <td><button type='button' className='edit' onClick={() => { this.Edditng(i) }}>Edit</button></td>
                                <td><button type='button' className='delete' onClick={() => { this.Deleting(i) }}>Delete</button></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}
