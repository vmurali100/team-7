import React, { Component } from 'react'

export default class User extends Component {
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

    hanldeSubmit = () => {
        let newUsers = [...this.state.allUsers];
        newUsers.push(this.state.user);
        this.setState({ allUsers: newUsers })
        localStorage.setItem("allUsers", JSON.stringify(newUsers))
        this.handleClear()
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
        this.setState({ user: this.state.allUsers[i] })
        this.setState({ sIndex: i })
    }

    hanldeUpdate = () => {
        let newUsers = [...this.state.allUsers];
        newUsers[this.state.sIndex] = this.state.user;
        this.setState({allUsers:newUsers,sIndex:null})
        localStorage.setItem("allUsers", JSON.stringify(newUsers))
        this.handleClear()
    }
    // 4. Delete User 

    handleDelete = (i) => {
        let newUsers = this.state.allUsers.filter((user, index) => {
            return i !== index
        })
        this.setState({ allUsers: newUsers })
    }
    componentDidMount() {
        let newUsers = JSON.parse(localStorage.getItem("allUsers"))
        if (newUsers) {
            this.setState({ allUsers: newUsers })

        }
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
                            {this.state.sIndex ? <button type="button" className="btn btn-primary" onClick={this.hanldeUpdate}>Update</button> : <button type="button" className="btn btn-primary" onClick={this.hanldeSubmit}>Submit</button>

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
                                        <td>{i + 1}</td>
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
