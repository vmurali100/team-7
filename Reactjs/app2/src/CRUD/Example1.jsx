import { Component } from "react";

export default class Example1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Example1: {
                Email: "",
                Password: ""
            },
            allusers:[]
        }
    }
    handlechange = (e) => {
        let newuser = { ...this.state.Example1 }
        newuser[e.target.name] = e.target.value
        this.setState({ Example1: newuser })
    }
    handlesubmit = (e) => {
        let newusers =[...this.state.allusers]
        newusers,push({...this.state.Example1})
        this.setState({allusers:newusers})
        this.handleclear()
        console.log(this.state.Example1)
    }
    handleclear=()=>{
        this.setState({Example1: {
            Email: "",
            Password: ""
        }})
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
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address :  </label>
                                <input type="email" className="form-control" name="Email" value={this.state.Example1.Email}
                                    onchange={(e) => { this.handlechange(e) }} />
                            </div><br />
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password  : </label>
                                <input type="password" className="form-control" name="Password" value={this.state.Example1.Password}
                                    onchange={(e) => { this.handlechange(e) }} />
                            </div><br />
                            <button type="button" className="btn btn-primary" onClick={this.handlesubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >#</th>
                                <th >Email</th>
                                <th >password</th>
                                <th>Edit</th>
                                <th>Delete</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                             {this.state.allusers.map((person,i)=>{
                                 return <tr>
                                     <td>{i+1}</td>
                                     <td>{person.Email}</td>
                                     <td>{person.Password}</td>
                                     <td><button className="btn btn-success">Edit</button></td>
                                     <td><button className= "btn btn-warning">Delete</button></td>
                                 </tr>
                             })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    }

}