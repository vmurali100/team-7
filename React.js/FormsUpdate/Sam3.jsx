import './Sam3.css'
import React, { Component } from 'react'

export default class Sam3 extends Component {
    constructor() {
      super()
    
      this.state = {
         three :{
             FirstName :"",
             LastName :"",
             Email:"",
             Comment:""
         }
      }
    }
    handlechange=(e)=>{
      let newthree = {...this.state.three}
      newthree[e.target.name] = e.target.value
      this.setState({three:newthree})

    }
    handlesubmit=()=>{
      console.log(this.state.three)
    }
  render() {
    return (
      <div className='Parent'>
          <div className='childone'>
            <img src="https://iconorbit.com/icons/256-watermark/2004201614425349226-Message%20box%20icon.jpg" alt="" />
            <h3>Contact Us</h3>
            <p>We would love to hear from you !</p>
          </div>
          <div className='childtwo'>
            <form action="">
            <label htmlFor="">First Name :</label> <br />
            <input type="text" name="FirstName" placeholder='Enter First Name' value={this.state.FirstName} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />
            <label htmlFor="">Last Name :</label> <br />
            <input type="text" name="LastName" placeholder='Enter Last Name' value={this.state.LastName} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />
            <label style={{'margin-left':'-35px'}} htmlFor="">Email :</label> <br />
            <input type="text" name="Email" placeholder='Enter email' value={this.state.Email} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />

            <label htmlFor="">Comment :</label> <br />
            <input style={{'height':'80px'}} type="text" name="Comment" value={this.state.Comment} onChange={(e)=>{this.handlechange(e)}} id="" /> <br /><br />

            <button onClick={this.handlesubmit}>Submit</button>
            </form>
          </div>

      </div>
    )
  }
}
