import { Component } from "react";

export class Forms extends Component {
    constructor(){
        super()
        this.state={
           student:{
            StudentName:"",
            StudentSubject:"",
            StudentEmail:""
           }
        }
    }
    handlechange=(e)=>{
        // let value = e.target.value
        // let namevv = e.target.name
        // console.log(e.target.name)
        // this.setState({namevv:value})

        let newstudent = {...this.state.student}
        newstudent[e.target.name]=e.target.value
        this.setState({student:newstudent})
    }
    handlesubmit=()=>{
        console.log(this.state.student)
    }
    
    render(){
       return <div>
            <label htmlFor="Student Name">Student Name</label>
            <input type="text" name="Student Name" value={this.state.StudentName} onChange={(e)=>{this.handlechange(e)}} /> <br/>
            <label htmlFor="lname">Student Subject</label> 
            <input type="text" name="Student Subject" value={this.state.StudentSubject} onChange={(e)=>{this.handlechange(e)}} /> <br/>
            <label htmlFor="">Student Email</label>
            <input type="text" name="Student Email" value={this.state.StudentEmail} onChange={(e)=>{this.handlechange(e)}} /> <br/>

            <button onClick={this.handlesubmit}>Submit</button>
        </div>
    }
}