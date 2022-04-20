import { Component } from "react";

export default class AllCRUD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allusers: [],
            user: {
                fname: "",
                email: "",
                password: ""
            },
            sIndex: null
        }
    }
    handlechange = (e) => {
        let newuser = { ...this.state.user }
        newuser[e.target.name] = e.target.value
        this.setState({ user: newuser })
    }
    handlesubmit = () => {
        let newusers = { ...this.state.allusers }
        newusers.push(this.state.user)
        this.setState({ allusers: newusers })
        localStorage.setItem('allusers', JSON.stringify(newusers))
        this.handleclear()
    }
    handleclear = () => {
        this.setState({
            user: {
                fname: "",
                email: "",
                password: ""
            }
        })
    }
    handledelete = (i) => {
        let newusers = this.state.allusers.filter((user, index) => {
            return i !== index
        })
        this.setState({ allusers: newusers })
    }
    handleEdit = (i) => {
        this.setState({ user: this.state.allusers[i] })
        this.setState({ sIndex: null })
    }
    handleupdate = () => {
        let newusers = { ...this.state.allusers }
        newusers[this.state.sIndex]=this.state.user
        this.setState({allusers:newusers,sIndex:null})
        localStorage.setItem('allusers', JSON.stringify(newusers))
        this.handleclear()
    }
    componentDidMount() {
        let newusers = JSON.parse(localStorage.getItem("allusers"))
        if (newusers) {
            this.setState({ allusers: newusers })
        }

    }
    render() {
        let { fname, email, password } = this.state.user
        return <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="fname" name="fname" className="form-control" value={fname} onChange={(e) => {
                                    this.handlechange(e)
                                }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" value={email} onChange={(e) => {
                                    this.handlechange(e)
                                }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" value={password} onChange={(e) => {
                                    this.handlechange(e)
                                }} />
                            </div>
                            {this.state.sIndex ? <button type="button" className="btn btn-primary" onClick={this.handleupdate}>Update</button> :
                            <button type="button" className="btn btn-primary" onClick={this.handlesubmit}>Submit</button>
                            }
                        </form>
                    </div>
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >First Name</th>
                                    <th >Email address</th>
                                    <th >Password</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allusers.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td><button className="btn btn-warning" onClick={() => {
                                            this.handledelete(i)
                                        }}>Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            this.handleEdit(i)
                                        }}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    }
}