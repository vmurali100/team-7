import React, { Component } from 'react'
import axios from 'axios'

export default class Sample2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Student: {
                fname: "",
                lname: "",
                fatherName: "",
                phoneNumber: ""
            },
            StudentData: [],
            Sindex: null
        }
    }
    HandleChange=(e)=>{
        const newStudent={...this.state.Student}
        newStudent[e.target.name]=e.target.value
        this.setState({Student:newStudent})
    }
    GetDatafromServer=()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
            console.log('response',res)
            this.setState({StudentData:res.data})
        })
    }
    componentDidMount=()=>{
        
        this.GetDatafromServer()
    }
    SubmitEvent=()=>{
        axios.post("http://localhost:3000/posts" ,this.state.Student).then(()=>{
            console.log('Data added successfully')
           this.GetDatafromServer()
           this.clearForm()
        })
    }
    clearForm=()=>{
        this.setState({Student: {
            fname: "",
            lname: "",
            fatherName: "",
            phoneNumber: ""
        }
        })
    }
    EditEvent=(i)=>{
        this.setState({Student:this.state.StudentData[i]})
        this.setState({Sindex:i})
    }
    DeleteEvent=(i)=>{
       axios.delete("http://localhost:3000/posts/"+ this.state.StudentData[i].id).then(()=>{
        this.GetDatafromServer()
       })
    }
    UpdateEvent=()=>{
      axios.put("http://localhost:3000/posts/"+this.state.Student.id,this.state.Student).then(()=>{
        this.GetDatafromServer()  
        this.clearForm()
        this.setState({Sindex:null})
      })
    }
    render() {
        const { fname, lname, fatherName, phoneNumber } = this.state.Student
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form action="">
                            <tr>
                                <td> <label htmlFor="">fname</label></td>
                                <td><input type="text" name="fname" value={fname} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor=""> lname</label></td>
                                <td><input type="text" name="lname" value={lname} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">fatherName</label></td>
                                <td><input type="text" name="fatherName" value={fatherName} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">phoneNumber</label></td>
                                <td><input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => { this.HandleChange(e) }} /></td>
                            </tr>
                            {this.state.Sindex !== null ? <button type='button' className=' btn btn-success' onClick={this.UpdateEvent}> Submit</button> : <button type='button' className=' btn btn-success' onClick={this.SubmitEvent}> Submit</button>}

                        </form>
                    </div>
                    <div className="col">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>fname</th>
                                    <th>lname</th>
                                    <th>fatherName</th>
                                    <th>mobileNumber</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.state.StudentData.map((User,i)=>{
                                   return <tr>
                                       <td>{User.fname}</td>
                                       <td>{User.lname}</td>
                                       <td>{User.fatherName}</td>
                                       <td>{User.phoneNumber}</td>
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
