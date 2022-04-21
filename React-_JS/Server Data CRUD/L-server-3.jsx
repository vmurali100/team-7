import React, { Component } from 'react'

export default class Local2 extends Component {

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
            Allmiddle: [],

            Spindex: null
        }
    }

    getmiddleFromServer = () => {
        axios.get(" http://localhost:3000/mens").then((sos) => {
            this.setState({ Allmiddle: sos.data })
        })
    }

    handlechange = (e) => {
        let newUser = { ...this.state.middle };
        newUser[e.target.name] = e.target.value;
        this.setState({ middle: newUser });
    };

    Clearform = () => {
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

    handleEdit = (i) => {
        this.setState({ middle: this.state.Allmiddle[i] })
        this.setState({ Spindex: i })
    }

    handleDelete = (i) => {
        axios.delete(" http://localhost:3000/mens/" + this.state.Allmiddle[i].id).then(() => {
            this.getmiddleFromServer();
        })

    }

    handlesubmit = () => {
        axios.post(" http://localhost:3000/mens ", this.state.middle).then(() => {
            this.getmiddleFromServer();
            this.Clearform()
        })


    }

    handleUpdate = () => {
        axios.put("  http://localhost:3000/mens/" + this.state.person.id, this.state.person).then(() => {

            this.getmiddleFromServer();
            this.setState({ Spindex: null })
            this.Clearform()
        })

    }



    componentDidMount = () => {
        this.getmiddleFromServer();

    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">Name</label> <br /><br />
                    <input type="text" name="name" id="" placeholder='Enter your full name...' value={this.state.middle.name} onChange={(e) => { this.handlechange(e); }} /> <br /><br />
                    <label htmlFor="">Username</label> <br /><br />
                    <input type="text" name="username" id="" placeholder=' Enter a username...' value={this.state.middle.username} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                    <label htmlFor="">Email Address</label> <br /><br />
                    <input type="text" name="mail" id="" placeholder='Enter your email address...' value={this.state.middle.mail} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                    <label htmlFor="">Password</label> <br /><br />
                    <input type="text" name="password" id="" placeholder='Enter your password...' value={this.state.middle.password} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                    <label htmlFor="">Confirm Password</label> <br /><br />
                    <input type="text" name="conp" id="" placeholder='Enter your password again...' value={this.state.middle.conp} onChange={(e) => { this.handleChange(e); }} /> <br /><br />

                    {this.state.Spindex ? <button type='button' onClick={this.handleUpdate}>Sign up</button> : <button type='button' onClick={this.handlesubmit}>Sign up</button>}


                </form>

                <table border="1">
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
                                <td><button className='edittttt' onClick={() => { this.handleEdit(i) }}>Edit</button></td>
                                <td><button className='warning' onClick={() => { this.handleDelete(i) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
