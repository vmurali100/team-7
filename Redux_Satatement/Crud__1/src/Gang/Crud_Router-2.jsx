import React, { Component } from 'react'

export default class Crud_Sam extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Adharlist: {
                Name: "",
                Idnumber: "",
                Voterid: "",
                Mobileno: ""
            },
            Lists: [],
            Sindex: null

        }
    }
    changed = (e) => {
        const newList = { ...this.state.Adharlist }
        newList[e.target.name] = e.target.value
        this.setState({ Adharlist: newList })

    }
    clickinghandle = () => {
        const newData = [...this.state.Lists]
        newData.push({ ...this.state.Adharlist })
        this.setState({ Lists: newData })
        localStorage.setItem("Lists", JSON.stringify(newData))
        this.ClearForm()
    }
    ClearForm = () => {
        this.setState({
            Adharlist: {
                Name: "",
                Idnumber: "",
                Voterid: "",
                Mobileno: ""
            }
        })
    }
    editBtn = (i) => {
        this.setState({ Adharlist: this.state.Lists[i] })
        this.setState({ Sindex: i })

    }
    DelBtn = (i) => {
        const newData = this.state.Lists.filter((Adharlist, index) => {
            return i !== index
        })
        this.setState({ Lists: newData })
    }
    componentDidMount = () => {
        let newData = JSON.parse(localStorage.getItem("Lists"))
        if (newData) {
            this.setState({ Lists: newData })
        }
    }
    Updateing = () => {
        const newData = [...this.state.Lists]
        newData[this.state.Sindex] = this.state.Adharlist;
        this.setState({ Lists: newData, Sindex: null })
        localStorage.setItem("Lists", JSON.stringify(newData))
        this.ClearForm()
    }
    render() {
        return (
            <div class="container">

                <form action="">
                    <tr>
                        <td><label htmlFor=""> Student Name</label></td>
                        <td> <input type="text" name="Name" value={this.state.Adharlist.Name} onChange={(e) => { this.changed(e) }} /></td>
                    </tr>
                    <tr>
                        <td> <label htmlFor=""> Idnumber</label></td>
                        <td><input type="number" name="Idnumber" value={this.state.Adharlist.Idnumber} onChange={(e) => { this.changed(e) }} /> </td>
                    </tr>
                    <tr>
                        <td> <label htmlFor="">Voterid</label></td>
                        <td><input type="text" name="Voterid" value={this.state.Adharlist.Voterid} onChange={(e) => { this.changed(e) }} /> </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Mobileno</label></td>
                        <td><input type="text" name="Mobileno" value={this.state.Adharlist.Mobileno} onChange={(e) => { this.changed(e) }} /></td>
                    </tr>
                    {this.state.Sindex ? <button type='button' onClick={this.Updateing}>Update</button> : <button type='button' onClick={this.clickinghandle}>Click</button>}                </form>

                <table >
                    <thead>
                        <tr> <th>Sl/No</th>
                            <th>Name</th>
                            <th>IdNumber</th>
                            <th>VoterId</th>
                            <th>Mobilenumber</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Lists.map((User, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{User.Name}</td>
                                <td>{User.Idnumber}</td>
                                <td>{User.Voterid}</td>
                                <td>{User.Mobileno}</td>
                                <td><button type='button' onClick={() => { this.editBtn(i) }}>Edit</button></td>
                                <td><button type='button' onClick={() => { this.DelBtn(i) }}>Delete</button></td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div>

        )
    }
}
