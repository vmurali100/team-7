import './Sampleaform4.css'
import React, { Component } from 'react'

export default class Sampleaform4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Student: {
        name: "",
        username: "",
        mail: "",
        pass: "",
        confirmPass: "",
        message: ""
      }
    }
  }
  DataChange = (e) => {
    let NewStudent = { ...this.state.Student }
    NewStudent[e.target.name] = e.target.value
    this.setState({ Student: NewStudent })
  }
  SendButton = () => {
    console.log(this.state.Student)
  }
  render() {
    return (
      <div className='Parent4'>
        <div className='Child4'>
          <h4>Bootstrap 4 Form Validation Demo</h4>
          <hr />
          <form action="">
            <label htmlFor="">Name</label><br />
            <input type="text" name="name" id="" value={this.state.Student.name} onChange={(e) => { this.DataChange(e) }} placeholder='Name' /><br />

            <label htmlFor="">Username</label><br />
            <input type="text" name="username" id="" value={this.state.Student.username} onChange={(e) => { this.DataChange(e) }} placeholder='Username' /><br />

            <label htmlFor="">Email</label><br />
            <input type="text" name="mail" id="" value={this.state.Student.mail} onChange={(e) => { this.DataChange(e) }} placeholder='Email' /><br />

            <label htmlFor="">Password</label><br />
            <input type="text" name="pass" id="" value={this.state.Student.pass} onChange={(e) => { this.DataChange(e) }} placeholder='Password' /><br />

            <label htmlFor="">Confirm Password</label><br />
            <input type="text" name="confirmPass" id="" value={this.state.Student.confirmPass} onChange={(e) => { this.DataChange(e) }} placeholder='Confirm' /><br />

            <label htmlFor="">Message</label><br />
            <input type="text" name="message" id="" value={this.state.Student.message} onChange={(e) => { this.DataChange(e) }} placeholder='Message' /><br /><br />

            <button type='button' id='MNO1' onClick={this.SendButton}>Send</button>
          </form>
        </div>
      </div>
    )
  }
}
