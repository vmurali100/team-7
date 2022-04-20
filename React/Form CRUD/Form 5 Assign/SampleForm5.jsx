import React, { Component } from 'react'

export default class Form5Sample extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        User: {
            fname: "",
            lname: "",
            office: "",
            username: "",
            pass: "",
            confirmPass: "",
            mail: "",
            mobileNo: ""
        }
      }
    }
    
render() {
    return (
        <div className='Parent'>
            <h2>Registration Form</h2>
            <br />

            <form action="">
                <tr>
                    <td><label htmlFor="">First Name</label></td>
                    <td> <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></button></td>
                    <td><input type="text" name="fname" id="" value={this.state.User.fname} placeholder="First Name" /><br /><br /></td>
                </tr>

                <tr> <td> <label htmlFor="">Last Name</label></td>
                    <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></button></td>
                    <td> <input type="text" name="lname" id="" value={this.state.User.lname} placeholder="Last Name" /><br /><br /></td>
                </tr>

                <tr>
                    <label className='Deena' htmlFor="">Department/Office</label>
                    <td><button> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg></button></td>
                    <td><select name="office" id="" placeholder="Select your Departmengt/Office" value={this.state.User.office} >
                        <option value="" placeholder="Select your Departmengt/Office"> Select your Departmengt/Office  </option>
                        <option value="" placeholder="Select your Departmengt/Office"> Select your Departmengt/Office   </option>
                        <option value="" placeholder="Select your Departmengt/Office"> Select your Departmengt/Office   </option>
                    </select> <br /><br /></td>
                </tr>

                <tr>
                    <td> <label htmlFor="">Username</label></td>
                    <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></button></td>
                    <td> <input type="text" name="username" id="" value={this.state.User.username} placeholder="Username" /><br /><br /></td>
                </tr>

                <tr>
                    <td><label htmlFor="">Password</label></td>
                    <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></button></td>
                    <td><input type="text" name="pass" id="" value={this.state.User.pass} placeholder="Password" /><br /><br /></td>
                </tr>

                <tr>
                    <label className='Deena' htmlFor="">Confirm Password</label>
                    <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></button></td>
                    <td><input type="text" name="confirmPass" id="" value={this.state.User.confirmPass} placeholder="Confirm Password" /><br /><br /></td>
                </tr>

                <tr>
                    <td><label htmlFor="">E-mail</label></td>
                    <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg></button></td>
                    <td><input type="text" name="mail" id="" value={this.state.User.mail} placeholder="E-mail Address" /><br /><br /></td>
                </tr>

                <tr>
                    <td><label htmlFor="">Contact No.</label></td>
                    <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg></button></td>
                    <td><input type="text" name="mobileNo" id="" value={this.state.User.mobileNo} placeholder="1234567890" /><br /><br /></td>
                </tr>

                <button className='Sadik'>SUBMIT <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg></button>
            </form>
        </div>
    )
}
}


