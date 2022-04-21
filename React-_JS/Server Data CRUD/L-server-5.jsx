import React, { Component } from 'react'

export default class Local4 extends Component {
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

    getform4FromServer = () => {
        axios.get(" http://localhost:3000/boy").then((sos) => {
            this.setState({ Allform4: sos.data })
        })
    }

    handlechange = (e) => {
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
            },

        })
    }

    handleEdit = (i) => {
        this.setState({ form4: this.state.Allform4[i] })
        this.setState({ Spindex: i })
    }

    handleDelete = (i) => {
        axios.delete(" http://localhost:3000/boy/" + this.state.Allform4[i].id).then(() => {
            this.getform4FromServer();
        })

    }

    handlesubmit = () => {
        axios.post(" http://localhost:3000/boy ", this.state.form4).then(() => {
            this.getform4FromServer();
            this.Clearform()
        })


    }

    handleUpdate = () => {
        axios.put(" http://localhost:3000/boy/ " + this.state.form4.id, this.state.form4).then(() => {

            this.getform4FromServer();
            this.setState({ Spindex: null })
            this.Clearform()
        })

    }



    componentDidMount = () => {
        this.getform4FromServer();

    }
    render() {
        return (
            <div>
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

                        {this.state.Spindex ?<button onClick={this.handleUpdate}>Update</button>:<button type='button' onClick={this.handlesubmit}>Sign up</button> }
                    </form>

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
                                    <td><button className='edittttt'  onClick={() => { this.handleEdit(i) }}>Edit</button></td>
                                    <td><button className='warning' onClick={() => { this.handleDelete(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
