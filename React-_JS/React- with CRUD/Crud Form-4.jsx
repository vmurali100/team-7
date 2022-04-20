import React, { Component } from 'react'
import './CSS-4.css'

export default class Sample4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form4: {
                name: '',
                username: '',
                mail: '',
                password: '',
                conp: '',
                msg: ''
            },
            Allform4: [],
            Spindex:null
        }
    }

    handleChange = (e) => {
        let newUser = { ...this.state.form4 };
        newUser[e.target.name] = e.target.value;
        this.setState({ form4: newUser });
    };

    Clearform = () => {
        this.setState({
            form4: {
                name: '',
                username: '',
                mail: '',
                password: '',
                conp: '',
                msg: ''
            }
        })
    }

    componentDidMount=()=>{
        let Allform4 =JSON.parse(localStorage.getItem('Allform4' ))
        if(Allform4){
            this.setState({Allform4:Allform4})
        }
    }    

    Editted=(i)=>{
        this.setState({form4:this.state.Allform4[i]})
        this.setState({Spindex:i})
    }

    delt = (i) => {
        let deleting = this.state.Allform4.filter((form4, index) => {
            return i !== index
        });
        this.setState({ Allform4: deleting })

    }  

    handlesubmited=()=>{
        let NewUser = [...this.state.Allform4]
        NewUser.push({...this.state.form4})
        this.setState({Allform4:NewUser})
        localStorage.setItem("Allform4",JSON.stringify(NewUser))
        this.Clearform()
    }  

    handleupdate=()=>{
        let NewUser=[...this.state.Allform4];
        NewUser[this.state.Spindex]=this.state.form4;
        this.setState({Allform4:NewUser,Spindex:null})
        localStorage.setItem("Allform4",JSON.stringify(NewUser))
        this.Clearform()
    }
    render() {
        return (
            <div className='raj'>
                <div className='Some'>
                    <h1>Bootstrap 4 Form  Validations Demo</h1>
                    <hr />
                    <form>
                        <label htmlFor="">Name</label><br /><br />
                        <input type="text" name="name" id="" placeholder='Name' value={this.state.form4.name} onChange={(e) => { this.handleChange(e); }} /><br /><br />
                        <label htmlFor="">Username</label><br /><br />
                        <input type="text" name="username" id="" placeholder='Username' value={this.state.form4.username} onChange={(e) => { this.handleChange(e); }} /><br /><br />
                        <label htmlFor="">Email</label><br /><br />
                        <input type="text" name="mail" id="" placeholder='Email' value={this.state.form4.mail} onChange={(e) => { this.handleChange(e); }} /><br /><br />
                        <label htmlFor="">Password</label><br /><br />
                        <input type="text" name="password" id="" placeholder='Password' value={this.state.form4.password} onChange={(e) => { this.handleChange(e); }} /><br /><br />
                        <label htmlFor="">Confirm Password</label><br /><br />
                        <input type="text" name="conp" id="" placeholder='Confirm Password' value={this.state.form4.conp} onChange={(e) => { this.handleChange(e); }} /><br /><br />
                        <label htmlFor="">Message</label><br /><br />
                        <input type="text" name="msg" id="" placeholder='Message' value={this.state.form4.msg} onChange={(e) => { this.handleChange(e); }} /><br /><br />

                        {this.state.Spindex ?<button onClick={this.handleupdate}>Update</button>:<button type='button' onClick={this.handlesubmited}>Sign up</button> }
                    </form>
                </div>
                <div className='tablee'>
                <table  border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email </th>
                                <th>Password</th> 
                                <th>Confirm Pass</th> 
                                <th>Message</th>                             
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Allform4.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.name}</td>
                                    <td>{suri.username}</td>
                                    <td>{suri.mail}</td>
                                    <td>{suri.password}</td> 
                                    <td>{suri.conp}</td> 
                                    <td>{suri.msg}</td>                                
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
