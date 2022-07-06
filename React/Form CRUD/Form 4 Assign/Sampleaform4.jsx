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
        message: "",
      },
      AllStudents: [],
      sIndex: null
    }
  }
  DataChange = (e) => {
    let NewStudent = { ...this.state.Student }
    NewStudent[e.target.name] = e.target.value
    this.setState({ Student: NewStudent })
  }
  SendButton = () => {
    let Newstd = [...this.state.AllStudents]
    Newstd.push({ ...this.state.Student })
    this.setState({ AllStudents: Newstd })
    localStorage.setItem("AllStudents", JSON.stringify(Newstd))
    this.FormClear()
  }
  FormClear = () => {
    this.setState({
      Student: {
        name: "",
        username: "",
        mail: "",
        pass: "",
        confirmPass: "",
        message: ""
      }
    })
  }
  EditBtn = (i) => {
    this.setState({ Student: this.state.AllStudents[i] })
    this.setState({ sIndex: i })
  }

  DeleteBtn = (i) => {
    let NewDelete = this.state.AllStudents.filter((Student, index) => {
      return i !== index
    })
    this.setState({ AllStudents: NewDelete })
  }

  ChangeUpdate = () => {
    let Newstd = [...this.state.AllStudents]
    Newstd[this.state.sIndex] = this.state.Student;
    this.setState({ AllStudents: Newstd, sIndex: null })
    localStorage.setItem("AllStudents", JSON.stringify(Newstd))
    this.FormClear()
  }

  componentDidMount() {
    let StdNew = JSON.parse(localStorage.getItem("AllStudents"))
    if (StdNew) {
      this.setState({ AllStudents: StdNew })
    }
  }

  render() {
    let { name, username, mail, pass, confirmPass, message } = this.state.Student
    return (
      <div className='Parent4'>
        <div className='Child4'>
          <h4>Bootstrap 4 Form Validation Demo</h4>
          <hr />
          <form id='La'>
            <label htmlFor="">Name</label><br />
            <input type="text" name="name" id="9" value={name} onChange={(e) => { this.DataChange(e) }} placeholder='Name' /><br />

            <label htmlFor="">Username</label><br />
            <input type="text" name="username" id="9" value={username} onChange={(e) => { this.DataChange(e) }} placeholder='Username' /><br />

            <label htmlFor="">Email</label><br />
            <input type="text" name="mail" id="9" value={mail} onChange={(e) => { this.DataChange(e) }} placeholder='Email' /><br />

            <label htmlFor="">Password</label><br />
            <input type="text" name="pass" id="9" value={pass} onChange={(e) => { this.DataChange(e) }} placeholder='Password' /><br />

            <label htmlFor="">Confirm Password</label><br />
            <input type="text" name="confirmPass" id="9" value={confirmPass} onChange={(e) => { this.DataChange(e) }} placeholder='Confirm' /><br />

            <label htmlFor="">Message</label><br />
            <input type="text" name="message" id="9" value={message} onChange={(e) => { this.DataChange(e) }} placeholder='Message' /><br /><br />

            {this.state.sIndex ? <button type='button' id='MNO1' onClick={this.ChangeUpdate}>Update</button> : <button type='button' id='MNO1' onClick={this.SendButton}>Send</button>}

          </form>
        </div>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th>R no</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.AllStudents.map((Dude, i) => {
              return <tr>
                <td>{i + 1}</td>
                <td>{Dude.name}</td>
                <td>{Dude.username}</td>
                <td>{Dude.mail}</td>
                <td>{Dude.pass}</td>
                <td>{Dude.confirmPass}</td>
                <td>{Dude.message}</td>
                <td><button className="btn btn-warning" onClick={() => { this.EditBtn(i) }}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={() => { this.DeleteBtn(i) }}>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}