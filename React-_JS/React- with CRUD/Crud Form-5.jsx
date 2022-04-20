import React, { Component } from 'react'
import './CSS-5.css'

export default class Sample5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form5: {
                fname: '',
                lname: '',
                office: '',
                username: '',
                password: '',
                conp: '',
                mail: '',
                num: ''

            },
            Allform5:[],

            Spindex:null
        }
    }

    handleChange = (e) => {
        let newUser = { ...this.state.form5 };
        newUser[e.target.name] = e.target.value;
        this.setState({ form5: newUser });
    };

    

    Clearform = () => {
        this.setState({
            form5: {
                fname: '',
                lname: '',
                office: '',
                username: '',
                password: '',
                conp: '',
                mail: '',
                num: ''

            },
        })
    }
    componentDidMount=()=>{
        let Allform5 =JSON.parse(localStorage.getItem('Allform5' ))
        if(Allform5){
            this.setState({Allform5:Allform5})
        }
    }    

    Editted=(i)=>{
        this.setState({form5:this.state.Allform5[i]})
        this.setState({Spindex:i})
    }

    delt = (i) => {
        let deleting = this.state.Allform5.filter((form5, index) => {
            return i !== index
        });
        this.setState({ Allform5: deleting })

    }  

    handlesubmited=()=>{
        let NewUser = [...this.state.Allform5]
        NewUser.push({...this.state.form5})
        this.setState({Allform5:NewUser})
        localStorage.setItem("Allform5",JSON.stringify(NewUser))
        this.Clearform()
    }  

    handleupdate=()=>{
        let NewUser=[...this.state.Allform5];
        NewUser[this.state.Spindex]=this.state.form5;
        this.setState({Allform5:NewUser,Spindex:null})
        localStorage.setItem("Allform5",JSON.stringify(NewUser))
        this.Clearform()
    }

    render() {
        return (
            <div className='raj'>
                <div className='megan'>
                    <h1>Registration Form</h1>
                    <form>
                        <label htmlFor="">First Name  </label>
                        <input type="text" name="fname" id="" placeholder='First Name' value={this.state.form5.fname} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">Last Name  </label>
                        <input type="text" name="lname" id="" placeholder='Last Name' value={this.state.form5.lname} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">Department/Office  </label>
                        <input type="text" name="office" id="" placeholder='Select your Department/Office' value={this.state.form5.office} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">Username  </label>
                        <input type="text" name="username" id="" placeholder='Username' value={this.state.form5.username} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">Passwords  </label>
                        <input type="text" name="password" id="" placeholder='Password' value={this.state.form5.password} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">Confirm Password  </label>
                        <input type="text" name="conp" id="" placeholder='Confirm Password' value={this.state.form5.conp} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">E-mail  </label>
                        <input type="text" name="mail" id="" placeholder='E-Mail Addreess' value={this.state.form5.mail} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />
                        <label htmlFor="">Contact.No  </label>
                        <input type="text" name="num" id="" placeholder='(678)' value={this.state.form5.num} onChange={(e) => { this.handleChange(e); }} /> <br /><br />

                        {this.state.Spindex ?<button onClick={this.handleupdate}>Update</button>:<button type='button' onClick={this.handlesubmited}>Sign up</button> }
                    </form>
                </div>

                <div className='tablee'>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th> First Name</th>
                                <th>Last Name</th>
                                <th>Office</th>
                                <th>Username</th>                                
                                <th>Password</th>
                                <th>Confirm Pass</th>
                                <th>Email </th>
                                <th>Cont.No</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Allform5.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.fname}</td>
                                    <td>{suri.lname}</td>
                                    <td>{suri.office}</td>
                                    <td>{suri.username}</td>                                    
                                    <td>{suri.password}</td>
                                    <td>{suri.conp}</td>
                                    <td>{suri.mail}</td>
                                    <td>{suri.num}</td>
                                    <td><button className='edittttt'  onClick={() => { this.Editted(i) }}>Edit</button></td>
                                    <td><button className='warning' onClick={() => { this.delt(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
