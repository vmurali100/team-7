import React, { Component } from 'react'
import './CSS-2.css'

export default class Sample2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

            form2: {
                fname: '',
                mail: '',
                city: '',
                file: '',
                radi: '',
                lname: '',
                password: '',
                data: '',
                check: '',
                radi2: ''

            },
            Allform2 :[],
            Spindex:i

        }
    }

    handleChange = (e) => {
        let newUser = { ...this.state.form2 };
        newUser[e.target.name] = e.target.value;
        this.setState({ form2: newUser });
    };   

    Clearform = () => {
        this.setState({
            form2: {
                fname: '',
                mail: '',
                city: '',
                file: '',
                radi: '',
                lname: '',
                password: '',
                data: '',
                check: '',
                radi2: ''
            }
        })
    }

    
    componentDidMount=()=>{
        let Allform2 =JSON.parse(localStorage.getItem('Allform2' ))
        if(Allform2){
            this.setState({Allform2:Allform2})
        }
    }    

    Editted=(i)=>{
        this.setState({form2:this.state.Allform2[i]})
        this.setState({Spindex:i})
    }

    delt = (i) => {
        let deleting = this.state.Allform2.filter((form2, index) => {
            return i !== index
        });
        this.setState({ Allform2: deleting })

    }  

    handlesubmited=()=>{
        let NewUser = [...this.state.Allform2]
        NewUser.push({...this.state.form2})
        this.setState({Allform2:NewUser})
        localStorage.setItem("Allform2",JSON.stringify(NewUser))
        this.Clearform()
    }  

    handleupdate=()=>{
        let NewUser=[...this.state.Allform2];
        NewUser[this.state.Spindex]=this.state.form2;
        this.setState({Allform2:NewUser,Spindex:null})
        localStorage.setItem("Allform2",JSON.stringify(NewUser))
        this.Clearform()
    }
    render() {
        return (
            <div className='raj'>
                <div className='maincon'>
                    <div className='mega'>
                        <h1>Form Validation</h1>
                        <hr />
                        <form>
                            <div className='first'>
                                <label htmlFor="">First Name</label> <br /><br />
                                <input type="text" name="fname" id="" placeholder='First Name' value={this.state.form2.fname} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                                <label htmlFor="">Email</label><br /><br />
                                <input type="text" name="mail" id="" placeholder='Email' value={this.state.form2.mail} onChange={(e) => { this.handleChange(e); }} />
                                <p>Please provide avalid Email</p> <br /> <br /><br />
                                <label className='cit' htmlFor="">City</label><br /><br />
                                <input type="text" name="city" id="" placeholder='City' value={this.state.form2.city} onChange={(e) => { this.handleChange(e); }} />
                                <p>Please provide a valid City </p><br />
                                <input type="file" name="file" id="" placeholder='Choose file...' value={this.state.form2.file} onChange={(e) => { this.handleChange(e); }} /> <br />
                                <p>Please Selected any file.</p> <br /><br />
                                <input className='togg' type="radio" name="radi" id="" value={this.state.form2.radi} onChange={(e) => { this.handleChange(e); }} />Toggle this custom radio
                            </div> <br /><br />

                            <div className='second'>
                                <label htmlFor="">Last Name</label><br /><br />
                                <input type="text" name="lname" id="" placeholder='Last Name' value={this.state.form2.lname} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                                <label htmlFor="">Password</label><br /><br />
                                <input type="text" name="password" id="" placeholder='password' value={this.state.form2.password} onChange={(e) => { this.handleChange(e); }} />
                                <p>Please provide avalid password</p><br /><br /><br /><br />
                                <label htmlFor="">Select Any value</label><br />
                                <select name=" data" id="" value={this.state.form2.data} onChange={(e) => { this.handleChange(e); }} >
                                    <option value="">Open this Select menu</option>
                                    <option value="">Open this Select menu</option>
                                    <option value="">Open this Select menu</option>
                                </select> <br />
                                <p>Please select any Options</p> <br /> <br /><br />
                                <input type="checkbox" name="check" id="" value={this.state.form2.check} onChange={(e) => { this.handleChange(e); }} />Check this Custom checkbox <br /><br /><br />
                                <input className='to' type="radio" name="radi2" id="" value={this.state.form2.radi2} onChange={(e) => { this.handleChange(e); }} />or Toggle this Other Custom radio

                            </div>
                        </form>
                        <hr />
                        {this.state.Spindex ?<button onClick={this.handleupdate}>Update</button>:<button type='button' onClick={this.handlesubmited}>Sign up</button> }
                    </div>

                </div>

                <div className='tablee'>
                <table  border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Last  Name</th>
                                <th>Email </th>
                                <th>Password</th>
                                <th>City</th>
                                <th>select Value</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Allform2.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.fname}</td>
                                    <td>{suri.lname}</td>
                                    <td>{suri.mail}</td>
                                    <td>{suri.password}</td>
                                    <td>{suri.city}</td>
                                    <th>{suri.data}</th>
                                    <td><button className='edittttt' onClick={() => { this.Editted(i) }}>Edit</button></td>
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
