import { Component } from "react";

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state={
            Valid:{
                name:"",
                username:"",
                email:"",
                Password:"",
                confirmpassword:""
            }
        }
    }
    handlechange=(e)=>{
        let newuser={...this.state.user}
        newuser[e.target.name]=e.target.value
        this.setState({user:newuser})
    }
    handlesubmit=(e)=>{
    //     let newexample={...this.state.example}
    //     newexample[e.target.name]=e.target.value
    //     this.setState({example:newexample})
    console.log(this.state.user)
     }
    
    render() {
        return <>
            <h2>Register Your account</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="name" className="form-control" name="Email" value={this.state.Valid.name}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="username" className="form-control" name="Email" value={this.state.Valid.username}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="Email" value={this.state.Valid.email}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="Password" value={this.state.Valid.Password}
                                onchange={(e)=>{this.handlechange(e)}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                                <input type="confirmpassword" className="form-control" name="Email" value={this.state.Valid.confirmpassword}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.handlesubmit}>Sign UP</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

}