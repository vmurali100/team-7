import React, { Component } from 'react'
import axios from 'axios'

export default class Local1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                fname: '',
                lname: '',
                password: '',
                city: ''
            },

            Allpersons: [],

            Spindex: null
        }
    }

    getpersonsFromServer = () => {
        axios.get(" http://localhost:3000/people").then((sos) => {
            this.setState({ Allpersons: sos.data })
        })
    }

    handlechange = (e) => {
        let newuser = { ...this.state.person }
        newuser[e.target.name] = e.target.value;
        this.setState({ person: newuser })
    }

    Clearform = () => {
        this.setState({
            person: {
                fname: '',
                lname: '',
                password: '',
                city: ''
            },
        })
    }

    handleEdit = (i) => {
        this.setState({ person: this.state.Allpersons[i] })
        this.setState({ Spindex: i })
    }

    handleDelete = () => {
        axios.delete("http://localhost:3000/people" + this.state.Allpersons.id).then(() => {
            this.getpersonsFromServer()
        })
    }

    handlesubmit = () => {
        axios.post(" http://localhost:3000/people/", this.state.person).then(() => {
            this.getpersonsFromServer();
            this.Clearform()
        })
    }


    handleUpdate = () => {
        axios.put(" http://localhost:3000/people/" + this.state.person.id, this.state.person).then(() => {
            this.getpersonsFromServer();
            this.Clearform()
            this.setState({ Spindex: null })
        })
    }


    componentDidMount = () => {
        this.getpersonsFromServer()
    }





    render() {
        let { fname, lname, password, city } = this.state.person
        return (
            <div>
                <form action="">
                    <label htmlFor="">First Name :-</label>
                    <input type="text" name="fname" id="" value={fname} onChange={(e) => { this.handlechange(e) }} /> <br /><br />
                    <label htmlFor="">Last Name :-</label>
                    <input type="text" name="lname" id="" value={lname} onChange={(e) => { this.handlechange(e) }} /> <br /> <br />
                    <label htmlFor="">Password :-</label>
                    <input type="text" name="password" id="" value={password} onChange={(e) => { this.handlechange(e) }} /> <br /><br />
                    <label htmlFor="">City</label>
                    <input type="text" name="city" id="" value={city} onChange={(e) => { this.handlechange(e) }} /><br /><br />
                </form>


                {this.state.Spindex ? <button type='button' onClick={this.handleUpdate()}>Updatting</button> : <button type='button' onClick={this.handlesubmit()}>Submitting</button> }

                <table>
                    <thead>
                        <th>s.no</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.Allpersons.map((man, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{man.fname}</td>
                                <td>{man.lname}</td>
                                <td>{man.password}</td>
                                <td>{man.city}</td>
                                <td><button type='button' className='btn-btn-primary' onClick={() => { this.handleEdit(i) }}>Edited</button></td>
                                <td><button type='button' className='btn-btn-danger' onClick={() => { this.handleDelete(i) }}>Delted</button></td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
