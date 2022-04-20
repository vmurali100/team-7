import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Student: {
                fname: '',
                lname: '',
                mail: '',
                password: '',
                city: ''
            },
            AllStudent:[],
            Spindex:null
        }       
    }

    handledata=(e)=>{
        let newuser = {...this.state.Student}
        newuser[e.target.name] = e.target.value
        this.setState({Student:newuser})
    }
    Clearform=()=>{
        this.setState({
            Student: {
                fname: '',
                lname: '',
                mail: '',
                password: '',
                city: ''
            }
        })
    }
    Delete=(i)=>{

        let Del = this.state.AllStudent.filter((ABC,index)=>{
            return i !== index
        })
        this.setState({AllStudent:Del})
    }

    handlesubmited=()=>{
        let NewUser = [...this.state.AllStudent]
        NewUser.push({...this.state.Student})
        this.setState({AllStudent:NewUser})
        localStorage.setItem("AllStudent",JSON.stringify(NewUser))
        this.Clearform()
    }    

    Editted=(i)=>{
        this.setState({Student:this.state.AllStudent[i]})
        this.setState({Spindex:i})
    }

    componentDidMount=()=>{
        let mydata =JSON.parse(localStorage.getItem('AllStudent' ))
        if(mydata){
            this.setState({AllStudent:mydata})
        }
    }
    handleupdate=()=>{
        let NewUser=[...this.state.AllStudent];
        NewUser[this.state.Spindex]=this.state.Student;
        this.setState({AllStudent:NewUser,Spindex:null})
        localStorage.setItem("AllStudent",JSON.stringify(NewUser))
        this.Clearform()
    }

    render() {
        return (
            <div>
                <form >
                    <tr>
                        <td><label htmlFor="">First Name :-</label></td>
                        <td><input type="text" name="fname" id="" value={this.state.Student.fname}  onChange={(e)=>{this.handledata(e)}} /> <br /><br /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">Last Name :-</label></td>
                        <td><input type="text" name="lname" id="" value={this.state.Student.lname}  onChange={(e)=>{this.handledata(e)}}/>  <br /><br /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">Email :-</label></td>
                        <td><input type="text" name="mail" id=""  value={this.state.Student.mail}  onChange={(e)=>{this.handledata(e)}} /> <br /><br /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">Password :-</label></td>
                        <td><input type="text" name="password" id=""  value={this.state.Student.password} onChange={(e)=>{this.handledata(e)}} /> <br /><br /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">City :-</label></td>
                        <td><input type="text" name="city" id=""  value={this.state.Student.city} onChange={(e)=>{this.handledata(e)}} /> <br /><br /></td>
                    </tr>

                </form>
                 
                 {this.state.Spindex ? <button onClick={this.handleupdate}>Update</button>:<button onClick={this.handlesubmited}>Submited</button> }    



                <table border='1' >
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>Edit </th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.AllStudent.map((Empty,i)=>{
                            return <tr>
                                <td>{i+1}</td>
                                <td>{Empty.fname}</td>
                                <td>{Empty.lname}</td>
                                <td>{Empty.mail}</td>
                                <td>{Empty.password}</td>
                                <td>{Empty.city}</td>
                                <td><button type='button' className='btn btn-primary' onClick={()=>{this.Editted(i)}}>Edit</button></td>
                                <td><button type='button' className='btn btn-danger' onClick={()=>{this.Delete(i)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
