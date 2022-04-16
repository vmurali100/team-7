import React, { Component } from 'react'
import './Css1.css'


export default class Sample1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            middle: {
                name: '',
                username: '',
                mail: '',
                password: '',
                conp: ''
            },
            Mydata: []
        }
    }

    handleChange = (e) => {
        let newUser = { ...this.state.middle };
        newUser[e.target.name] = e.target.value;
        this.setState({ middle: newUser });
    };

    chagebutton = () => {
        // console.log(this.state.middle)
        let newdata = [...this.state.Mydata]
        newdata.push({ ...this.state.middle })
        this.setState({ Mydata: newdata })
        this.clearsuri()
    }

    clearsuri = () => {
        this.setState({
            middle: {
                name: '',
                username: '',
                mail: '',
                password: '',
                conp: ''
            },
        })
    }

    delt = (i) => {
        let deleting = this.state.Mydata.filter((middle, index) => {
            return i !== index
        });
        this.setState({ Mydata: deleting })

    }

    render() {
        return (
            <div className='raj'>
                <div className='Container'>
                    <h1>Register your account</h1>
                    <div className='middle'>
                        <form>
                            <label htmlFor="">Name</label> <br /><br />
                            <input type="text" name="name" id="" placeholder='Enter your full name...' value={this.state.middle.name} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Username</label> <br /><br />
                            <input type="text" name="username" id="" placeholder=' Enter a username...' value={this.state.middle.username} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Email Address</label> <br /><br />
                            <input type="text" name="mail" id="" placeholder='Enter your email address...' value={this.state.middle.mail} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Password</label> <br /><br />
                            <input type="text" name="password" id="" placeholder='Enter your password...' value={this.state.middle.password} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Confirm Password</label> <br /><br />
                            <input type="text" name="conp" id="" placeholder='Enter your password again...' value={this.state.middle.conp} onChange={(e) => { this.handleChange(e); }} /> <br /><br />

                            <button type='button' onClick={this.chagebutton}>Sign up</button>

                            <p>Already have an account? <a href="#">Sign in</a></p>

                        </form>
                    </div>

                </div>
                <div className='tablee'>
                    <table  border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email Address</th>
                                <th>Password</th>
                                <th>confirm Pass</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Mydata.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.name}</td>
                                    <td>{suri.username}</td>
                                    <td>{suri.mail}</td>
                                    <td>{suri.password}</td>
                                    <td>{suri.conp}</td>
                                    <td><button className='edittttt'>Edit</button></td>
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
