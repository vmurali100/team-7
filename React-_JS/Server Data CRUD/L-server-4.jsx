import React, { Component } from 'react'

export default class Local3 extends Component {
    constructor(props) {
        super(props)

        this.state = {

            form2: {
                fname: '',
                lname: '',
                mail: '',
                comment: ''
            },
            Allform2: [],

            Spindex: i

        }
    }



    getform2FromServer = () => {
        axios.get(" http://localhost:3000/Womens").then((sos) => {
            this.setState({ Allform2: sos.data })
        })
    }

    handlechange = (e) => {
        let newUser = { ...this.state.form2 };
        newUser[e.target.name] = e.target.value;
        this.setState({ form2: newUser });
    };

    Clearform = () => {
        this.setState({
            form2: {
                fname: '',
                lname: '',
                mail: '',
                comment: ''
            },

        })
    }

    handleEdit = (i) => {
        this.setState({ form2: this.state.Allform2[i] })
        this.setState({ Spindex: i })
    }

    handleDelete = (i) => {
        axios.delete(" http://localhost:3000/Womens/" + this.state.Allform2[i].id).then(() => {
            this.getform2FromServer();
        })

    }

    handlesubmit = () => {
        axios.post(" http://localhost:3000/Womens ", this.state.form2).then(() => {
            this.getform2FromServer();
            this.Clearform()
        })


    }

    handleUpdate = () => {
        axios.put("  http://localhost:3000/Womens/" + this.state.form2.id, this.state.form2).then(() => {

            this.getform2FromServer();
            this.setState({ Spindex: null })
            this.Clearform()
        })

    }



    componentDidMount = () => {
        this.getform2FromServer();

    }
    render() {
        return (
            <div className='raj'>
                <div className='maincon'>
                    <div className='mega'>                        
                       
                        <form>
                            <label htmlFor="">First Name</label><br /><br />
                            <input type="text" name="fname" id="" placeholder='Enter Firsr name' value={this.state.form2.fname} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Last Name</label><br /><br />
                            <input type="text" name="lname" id="" placeholder='Enter Last name' value={this.state.form2.lname} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Email</label><br /><br />
                            <input type="text" name="mail" id="" placeholder='Enter email' value={this.state.form2.mail} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                            <label htmlFor="">Commment</label><br /><br />
                            <textarea name="comment" id="" cols="60" rows="5" value={this.state.form2.comment} onChange={(e) => { this.handleChange(e); }}></textarea> <br /><br />

                        </form>
                        <hr />
                        {this.state.Spindex ? <button onClick={this.handleUpdate}>Update</button> : <button type='button' onClick={this.handlesubmit}>Sign up</button>}
                    </div>

                </div>

                <div className='tablee'>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Last  Name</th>
                                <th>Email </th>
                                <th>Comment</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Allform3.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.fname}</td>
                                    <td>{suri.lname}</td>
                                    <td>{suri.mail}</td>
                                    <td>{suri.comment}</td>
                                    <td><button className='edittttt' onClick={() => { this.handleEdit(i) }}>Edit</button></td>
                                    <td><button className='warning' onClick={() => { this.handleDelete(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
