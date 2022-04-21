import axios from "axios";
import { Component } from "react";

export default class Server extends Component {
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
    getusersfromserver=()=>{
        axios.get("http://localhost:3000/server").then((res)=>{
            console.log("response",res)
            this.setState({allusers:res.data})
        })
    }
    handlesubmit = () => {
        axios.post("http://localhost:3000/server",this.state.user).then(()=>{
            console.log("user success")
            this.getusersfromserver()
            this.handleclear()
        }) 
        
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
        axios.delete("http://localhost:3000/server"+this.state.allusers[i].id)
        .then(()=>{
            this.getusersfromserver()
        })
    }
    handleEdit = (i) => {
        this.setState({ user: this.state.allusers[i] })
        this.setState({ sIndex: null })
    }
    handleupdate = () => {
       axios.put("http://localhost:3000/server"+this.state.user.id,this.state.user)
       .then(()=>{
           this.getusersfromserver();
           this.handleclear();
           this.setState({sIndex:null})
       })
    }
    componentDidMount() {
        this.getusersfromserver()

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
                                        <td>{user.id}</td>
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