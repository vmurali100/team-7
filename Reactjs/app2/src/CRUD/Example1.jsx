import { Component } from "react";

export default class Example1 extends Component {
    constructor(props) {
        super(props)
        this.state={
            Example1:{
                Email:"",
                Password:""
            }
        }
    }
    handlechange=(e)=>{
        let newuser={...this.state.user}
        newuser[e.target.name]=e.target.value
        this.setState({user:newuser})
    }
    handlesubmit=(e)=>{
        console.log(this.state.user)
    }
    render() {
        return <>
            <h2>Happy Welcome</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="Email" value={this.state.Example1.Email}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="Password" value={this.state.Example1.Password}
                                onchange={(e)=>{this.handlechange(e)}} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.handlesubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

}