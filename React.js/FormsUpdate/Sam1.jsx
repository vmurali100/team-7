import React, { Component } from 'react'

export default class Sam1 extends Component {
    constructor() {
      super()
    
      this.state = {
         first : {
             Name : "",
             Username :"",
             Emailaddress:"",
             Password:"",
             ConfirmPassword:""
         }
      }
    }
    handlechange=(e)=>{
        let newfirst = {...this.state.first}
        newfirst[e.target.name] = e.target.value
        this.setState({first:newfirst})
    }
    handlesubmit=()=>{
        console.log(this.state.first)
    }

  render() {
    return (
     <div id='one' style={{'backgroundColor':'blue','width':'500px','height':'550px'}}>
          <h2 style={{'color':'white',position:'relative',top:'7px'}}>Register your account</h2>
          <div style={{'border':'2px solid',width:'400px',backgroundColor:'white','margin':'0 auto'}}>
          <label style={{'margin-right':'320px'}} htmlFor="">Name</label> <br />
          <input type="text" name="Name"  placeholder='Enter your full name...' style={{'margin-right':'5px','width':'350px','height':'25px'}} value={this.state.Name} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />
          <label style={{'margin-right':'290px'}} htmlFor="">Username</label> <br />
          <input type="text" name="Username" placeholder='Enter your username...' style={{'margin-right':'5px','width':'350px','height':'25px'}} value={this.state.Username} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />
        <label style={{'margin-right':'260px'}} htmlFor="">Email address</label><br />
        <input type="text" name="Emailaddress"  placeholder='Enter your email address...' style={{'margin-right':'5px','width':'350px','height':'25px'}} value={this.state.Emailaddress} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />
        <label style={{'margin-right':'290px'}} htmlFor="">Password</label><br />
        <input type="text" name="Password"  placeholder='Enter your password...' style={{'margin-right':'5px','width':'350px','height':'25px'}} value={this.state.Password} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />

        <label style={{'margin-right':'230px'}} htmlFor=""> Confirm Password</label><br />
        <input type="text" name="ConfirmPassword"  placeholder='Enter your password again...' style={{'margin-right':'5px','width':'350px','height':'25px'}} value={this.state.ConfirmPassword} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />

        <button style={{backgroundColor:'green','color':'white','width':'355px','height':'30px','margin-right':'5px'}} onClick={this.handlesubmit} >Sign up</button> <br /><br />
        <p>Already have an account? <a href="">Sign in.</a></p>
      </div>

     </div>   
     
    )
  }
} 
