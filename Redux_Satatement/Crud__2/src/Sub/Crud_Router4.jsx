import React, { Component } from 'react'

export default class Crud_test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Content: {
                User: '',
                pass: '',
                Email: '',
                PnoneNumber: ''
            },

            UserDetails: [],
            Sindex: null
        }

    }
    changehanadler = (e) => {
        const newuserdata = { ...this.state.Content }
        newuserdata[e.target.name] = e.target.value
        this.setState({ Content: newuserdata })

    }
    clickEvent = () => {
        const newuserDetails = [...this.state.UserDetails]
        newuserDetails.push({ ...this.state.Content })
        this.setState({ UserDetails: newuserDetails })
        localStorage.setItem("UserDetails", JSON.stringify(newuserDetails))
        this.ClearForm()
    }
    ClearForm = () => {
        this.setState({
            Content: {
                User: '',
                pass: '',
                Email: '',
                PnoneNumber: ''
            }

        })

    }
    editBtn = (i) => {
        this.setState({ Content: this.state.UserDetails[i] })
        this.setState({ Sindex: i })
    }
    delBtn = (i) => {
        const newuserDetails = this.state.UserDetails.filter((Content, index) => {
            return i !== index
        })
        this.setState({ UserDetails: newuserDetails })
    }
    componentDidMount = () => {
        let newuserDetails = JSON.parse(localStorage.getItem("UserDetails"))
        if (newuserDetails) {
            this.setState({ UserDetails: newuserDetails })
        }
    }
    Updatedata = () => {
        const newuserDetails = [...this.state.UserDetails]
        newuserDetails[this.state.Sindex] = this.state.Content
        this.setState({ UserDetails: newuserDetails, Sindex: null })
        localStorage.setItem("UserDetails", JSON.stringify(newuserDetails))
        this.ClearForm()
    }
    render() {
        return (

            <div className="container">
                <form action="">

                    <tr>
                        <td><label htmlFor="">User</label></td>
                        <td><input type="text" name="User" value={this.state.Content.User} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">pass</label></td>
                        <td><input type="password" name="pass" value={this.state.Content.pass} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="text" name="Email" value={this.state.Content.Email} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>

                    </tr>

                    <tr>
                        <td><label htmlFor="">PnoneNumber</label></td>
                        <td><input type="number" name="PnoneNumber" value={this.state.Content.PnoneNumber} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>
                    </tr>

                    {this.state.Sindex ? <button type='button' className="btn btn-success" onClick={this.Updatedata}>Update</button> : <button type='button' className="btn btn-success" onClick={this.clickEvent}>Submit</button>}

                </form>

                <table >
                    <thead>
                        <tr>
                            <th>Sl/No</th>
                            <th>Name</th>
                            <th>pass</th>
                            <th>Email</th>
                            <th>PnoneNumber</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.UserDetails.map((person, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{person.User}</td>
                                <td>{person.pass}</td>
                                <td>{person.Email}</td>
                                <td>{person.PnoneNumber}</td>
                                <td><button className="btn btn-warning" onClick={() => { this.editBtn(i) }}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => { this.delBtn(i) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>



        )
    }
}
