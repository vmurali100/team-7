import './Ssix.css'
import React, { Component } from 'react'

export default class Ssix extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Sadik: {
                FirstName: "",
                LastName: "",
                DepartmentOffice: "",
                Username: "",
                Password: "",
                ConfirmPassword: "",
                Email: "",
                ContactNo: ""
            },
             Allsadik: [],
             sIndex:null
        }
    }
    handlechange = (e) => {
        let newhandlechange = { ...this.state.Sadik }
        newhandlechange[e.target.name] = e.target.value
        this.setState({ Sadik: newhandlechange })
    }
    Clicksubmit = () => {
        // console.log(this.state.Sadik)
        let newsbmt = [...this.state.Allsadik]
        newsbmt.push({...this.state.Sadik})
        this.setState({Allsadik:newsbmt})
        localStorage.setItem("Allsadik", JSON.stringify(newsbmt))

        this.clear()
    }
    clear=()=>{
        this.setState({
            Sadik: {
                FirstName: "",
                LastName: "",
                DepartmentOffice: "",
                Username: "",
                Password: "",
                ConfirmPassword: "",
                Email: "",
                ContactNo: "",
            },
        })
    }

    editbtn=(i)=>{
        this.setState({Sadik:this.state.Allsadik[i]})
        this.setState({sIndex: i})
    }

    Updatebtn=()=>{
        let NewUpdatebtn = [...this.state.Allsadik]
        NewUpdatebtn[this.state.sIndex] = this.state.Sadik;
        this.setState({Allsadik:NewUpdatebtn,sIndex:null})
        localStorage.setItem("Allsadik", JSON.stringify(NewUpdatebtn))
        this.ClearArray()
    }

    delbtn=(i)=>{
        let newdelbtn = this.state.Allsadik.filter((Sadik,index)=>{
           return i !== index
        })
        this.setState({Allsadik:newdelbtn})
    }

    componentDidMount() {
        let Newbtn = JSON.parse(localStorage.getItem("Allsadik"))
        if (Newbtn) {
            this.setState({ Allsadik: Newbtn })
        }
    }
    render() {
        return (
            <div className='parent'>
                <div className='child'>
                    <form action="">
                        <h2>Registration Form</h2> <br />
                        <tr>
                            <td> <label id='one' htmlFor="">First Name</label></td>
                            <td><button> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></button>
                            </td>
                            <td>
                                <input type="text" name="FirstName" placeholder='First Name' value={this.state.Sadik.FirstName.value} onChange={(e) => { this.handlechange(e) }}  /> <br /><br />
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <label id='two' htmlFor="">Last Name</label> </td>
                            <td>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg></button></td>
                            <td>
                                <input type="text" name="LastName" placeholder='Last Name' value={this.state.Sadik.LastName.value} onChange={(e) => { this.handlechange(e) }}  /> <br /><br />
                            </td>
                        </tr>
                        <tr>

                            <td><label id='three' htmlFor="">Department / Office </label></td>
                            <td> <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></button></td>
                            <td><select name="DepartmentOffice "  placeholder='Department / Office'  onChange={(e) => { this.handlechange(e) }} >
                                <option value={this.state.Sadik.DepartmentOffice} placeholder='Department / Office'>Department/Office</option>
                                <option value={this.state.Sadik.DepartmentOffice} placeholder='Department / Office'>Railway-Department/Office</option>
                                <option value={this.state.Sadik.DepartmentOffice} placeholder='Department / Office'>Police-Department/Office</option>
                                </select></td>
                            <br /><br />
                              </tr>
                        <tr>

                            <td><label id='four' htmlFor="">Username </label></td>
                            <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></button></td>
                            <td> <input type="text" name="Username " placeholder='Username' value={this.state.Sadik.Username.value} onChange={(e) => { this.handlechange(e) }}  /><br /><br />
                            </td> </tr>
                        <tr>
                            <td><label id='five' htmlFor="">Password</label></td>
                            <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></button></td>
                            <td> <input type="text" name=" Password" placeholder='Password' value={this.state.Sadik.Password.value} onChange={(e) => { this.handlechange(e) }}  /><br /><br />
                            </td> </tr>
                        <tr>

                            <td><label id='six' htmlFor="">Confirm Password</label></td>
                            <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></button></td>
                            <td> <input type="text" name="ConfirmPassword " placeholder='Confirm Password' value={this.state.Sadik.ConfirmPassword.value} onChange={(e) => { this.handlechange(e) }} id="six" /><br /><br />
                            </td></tr>
                        <tr>

                            <td><label id='seven' htmlFor="">E-mail</label></td>
                            <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg></button></td>
                            <td> <input type="text" name="Email " placeholder='E-mail Address' value={this.state.Sadik.Email.value} onChange={(e) => { this.handlechange(e) }}  /><br /><br />
                            </td> </tr>
                        <tr>
                            <td>
                                <label id='eight' htmlFor="">Contact No :</label></td>
                            <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg></button></td>
                            <td> <input type="text" name="ContactNo" placeholder='(639)' value={this.state.Sadik.ContactNo.value} onChange={(e) => { this.handlechange(e) }}  /> <br /><br />
                            </td>
                        </tr>
                        <tr>
                            {this.state.sIndex ?  <td><button type='button' onClick={this.Updatebtn} >Update <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg></button></td>:                             <td><button type='button' onClick={this.Clicksubmit} >Submit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg></button></td>}
                            {/* <td><button type='button' onClick={this.Clicksubmit} >Submit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg></button></td> */}

                        {/* <td><button type='button' onClick={this.Updatebtn} >Update <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg></button></td> */}
                        </tr>
                    </form>
                </div>

                <div className='tablediv'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Deprtmnt/Offce</th>
                                    <th> Username</th>
                                    <th> Password</th>
                                    <th> Confirm Password</th>
                                    <th> E-mail</th>
                                    <th> Contact No.</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Allsadik.map((RRR,i)=>{
                                    return <tr>
                                        <td>{i + 1}</td>
                                        <td> {RRR.FirstName}</td>
                                    <td> {RRR. LastName}</td>
                                    <td>{ RRR. DepartmentOffice}</td>
                                    <td>{ RRR.Username}</td>
                                    <td> {RRR.Password}</td>
                                    <td> {RRR.ConfirmPassword}</td>
                                    <td>{ RRR.Email}</td>
                                    <td> {RRR.ContactNo}</td>
                                    <td><button className="btn btn-outline-warning" onClick={()=>{this.editbtn(i)}}>Edit</button></td>
                                    <td><button className="btn btn-outline-danger" onClick={()=>{this.delbtn(i)}}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                </div>

            </div>
        )
    }
}
