import React, { Component } from 'react'

export default class Local5 extends Component {
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
            Allform5: [],

            Spindex: null
        }
    }

    
    getform5FromServer = () => {
        axios.get("  http://localhost:3000/girl").then((sos) => {
            this.setState({ Allform5: sos.data })
        })
    }

    handlechange = (e) => {
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

    handleEdit = (i) => {
        this.setState({ form5: this.state.Allform5[i] })
        this.setState({ Spindex: i })
    }

    handleDelete = (i) => {
        axios.delete("  http://localhost:3000/girl/" + this.state.Allform5[i].id).then(() => {
            this.getform5FromServer();
        })

    }

    handlesubmit = () => {
        axios.post("  http://localhost:3000/girl ", this.state.form5).then(() => {
            this.getform5FromServer();
            this.Clearform()
        })


    }

    handleUpdate = () => {
        axios.put("  http://localhost:3000/girl/ " + this.state.form5.id, this.state.form5).then(() => {

            this.getform5FromServer();
            this.setState({ Spindex: null })
            this.Clearform()
        })

    }



    componentDidMount = () => {
        this.getform5FromServer();

    }
    render() {
        return (
            <div>
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

                    {this.state.Spindex ? <button onClick={this.handleupdate}>Update</button> : <button type='button' onClick={this.handlesubmited}>Sign up</button>}
                </form>

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
                                <td><button className='edittttt' onClick={() => { this.Editted(i) }}>Edit</button></td>
                                <td><button className='warning' onClick={() => { this.delt(i) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
