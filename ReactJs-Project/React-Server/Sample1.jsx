import React, { Component } from 'react'
import axios from 'axios'

export default class Sample4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                Name: "",
                username: "",
                password: "",
                email: ""
            },
            Users:[],
            Sindex:null
        }
    }
    HandleChange = (e) => {
        const newUser = { ...this.state.User }
        newUser[e.target.name] = e.target.value
        this.setState({ User: newUser })
    }
    Getdatafrom=()=>{
        axios.get("http://localhost:3000/Users").then((res)=>{
        console.log('response',res)
        this.setState({Users:res.data})
        })
    }

    SubmitEvent = () => {
        axios.post("http://localhost:3000/Users", this.state.User).then(() => {
            console.log('Code Added successfully')
            this.Getdatafrom()
            this.clearForm()
        })
      
        
    }
   
    clearForm=()=>{
        this.setState({ User: {
            Name: "",
            username: "",
            password: "",
            email: ""
        }
            
        })
    }
   EditEvent=(i)=>{
    this.setState({User:this.state.Users[i]})
    this.setState({Sindex:i})
   }
   DeleteEvent=(i)=>{
       axios.delete("http://localhost:3000/Users/"+this.state.Users[i].id).then(()=>{
           this.Getdatafrom()
       })
   }
   UpdateEvent=()=>{
    axios.put("http://localhost:3000/Users/" + this.state.User.id,this.state.User).then(()=>{
        this.state.Getdatafrom()
        this.clearForm()
        this.setState({Sindex:null})
    })
   }  
   
   componentDidMount=()=>{
    this.Getdatafrom()
}

    render() {
        const { Name, username, password, email } = this.state.User
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form action="">
                            <tr>
                                <td> <label htmlFor="">name</label></td>
                                <td><input type="text" name="Name" value={Name} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor=""> username</label></td>
                                <td><input type="text" name="username" value={username} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">password</label></td>
                                <td><input type="text" name="password" value={password} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor=""> email</label></td>
                                <td><input type="text" name="email" value={email} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            {this.state.Sindex !==null ?  <button type='button' className=' btn btn-success' onClick={this.UpdateEvent}> Submit</button>: <button type='button' className=' btn btn-success' onClick={this.SubmitEvent}> Submit</button>}
                            
                        </form>

                    </div>
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>username</th>
                                    <th>password</th>
                                    <th>email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                 {this.state.Users.map((Hello,i) => {
                                    return <tr>
                                        <td>{Hello.Name}</td>
                                        <td>{Hello.username}</td>
                                        <td>{Hello.password}</td>
                                        <td>{Hello.email}</td>
                                        <td><button type='button' className='btn btn-warning' onClick={()=>{this.EditEvent(i)}}> Edit</button></td>
                                        <td><button type='button' className='btn btn-danger' onClick={()=>{this.DeleteEvent(i)}}> Delete</button></td>

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

