import axios from 'axios';
import React, { Component } from 'react'

export default class Users_Server extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            user: {
                fname: "",
                email: "",
                username: ""
            },
            sIndex: null
        }
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser })
    }

    getUsersFromServer = () => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log("Response", res)
            this.setState({ allUsers: res.data })
        })
    }
    hanldeSubmit = () => {
        axios.post("http://localhost:3000/users", this.state.user).then(() => {
            console.log("User Added Successfully")
            this.getUsersFromServer();
            this.handleClear()
        })
    }

    handleClear = () => {
        this.setState({
            user: {
                fname: "",
                email: "",
                username: ""
            }
        })
    }
    // 1. Create User 
    // 2. Read User 
    // 3. Update User 

    handleEdit = (i) => {
        this.setState({ user: this.state.allUsers[i], sIndex: i })
    }

    hanldeUpdate = () => {
        axios.put("http://localhost:3000/users/" + this.state.user.id, this.state.user).then(() => {
            this.getUsersFromServer();
            this.handleClear();
            this.setState({ sIndex: null })
        })
    }
    // 4. Delete User 

    handleDelete = (i) => {
        axios.delete("http://localhost:3000/users/" + this.state.allUsers[i].id).then(() => {
            this.getUsersFromServer()
        })
    }
    componentDidMount() {
        this.getUsersFromServer()
    }
    render() {
        let { fname, email, username } = this.state.user

        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="email" name='fname' className="form-control" value={fname} onChange={(e) => {
                                    this.handleChange(e)
                                }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" value={email} onChange={(e) => {
                                    this.handleChange(e)
                                }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="email" name='username' className="form-control" value={username} onChange={(e) => {
                                    this.handleChange(e)
                                }} />
                            </div>
                            {this.state.sIndex !==null ? <button type="button" className="btn btn-primary" onClick={this.hanldeUpdate}>Update</button> : <button type="button" className="btn btn-primary" onClick={this.hanldeSubmit}>Submit</button>

                            }
                        </form>
                    </div>
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allUsers.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{user.id}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td><button className='btn btn-warning' onClick={() => {
                                            this.handleEdit(i)
                                        }}>Edit</button></td>
                                        <td><button className='btn btn-danger' onClick={() => {
                                            this.handleDelete(i)
                                        }}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}
