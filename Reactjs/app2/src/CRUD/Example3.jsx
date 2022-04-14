import { Component } from "react";

export default class Example1 extends Component {
    constructor(props) {
        super(props)
        this.state={
            Report:{
                fname:"",
                lname:"",
                email:"",
                comment:""
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
            <h2>Give me Report</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                <input type="" className="form-control" name="Email" value={this.state.Report.fname}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                                <input type="" className="form-control" name="Password" value={this.state.Report.lname}
                                onchange={(e)=>{this.handlechange(e)}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="" className="form-control" name="Email" value={this.state.Report.email}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Comment</label>
                                <input type="text" className="form-control" name="Email" value={this.state.Report.comment}
                                 onchange={(e)=>{this.handlechange(e)}}/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.handlesubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

}