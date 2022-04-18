import React, { Component } from 'react'

export default class NewSample1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Userdata: {
                UserName: '',
                Password: '',
                Email: '',
                MobileNumber: '',
            },
            UserDetails: [

            ]
        }
    }
    changehanadler = (e) => {
        const newuserdata = { ...this.state.Userdata }
        newuserdata[e.target.name] = e.target.value
        this.setState({ Userdata: newuserdata })

    }
    clickEvent = () => {
        const newuserDetails = [...this.state.UserDetails]
        newuserDetails.push({ ...this.state.Userdata })
        this.setState({ UserDetails: newuserDetails })
    }
    render() {
        return (
            <div className='tableform'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form action="">

                                <label htmlFor="">UserName</label>
                                <input type="text" name="UserName" value={this.state.Userdata.UserName} onChange={(e) => { this.changehanadler(e) }} /> <br /><br />



                                <label htmlFor="">Password</label>
                                <input type="password" name="Password" value={this.state.Userdata.Password} onChange={(e) => { this.changehanadler(e) }} /> <br /><br />



                                <label htmlFor="">Email</label>
                                <input type="email" name="Email" value={this.state.Userdata.Email} onChange={(e) => { this.changehanadler(e) }} /> <br /><br />



                                <label htmlFor="">MobileNumber</label>
                                <input type="number" name="MobileNumber" value={this.state.Userdata.MobileNumber} onChange={(e) => { this.changehanadler(e) }} /> <br /><br />


                                <button type='button' className="btn btn-success" onClick={this.clickEvent}>Submit</button>
                            </form>
                        </div>
                        <div className="col">
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>Sl/No</th>
                                        <th>User Name</th>
                                        <th>Password</th>
                                        <th>Email</th>
                                        <th>MobileNumber</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.UserDetails.map((person, i) => {
                                        return <tr>
                                            <td>{i + 1}</td>
                                            <td>{person.UserName}</td>
                                            <td>{person.Password}</td>
                                            <td>{person.Email}</td>
                                            <td>{person.MobileNumber}</td>
                                            <td><button className="btn btn-warning">Edit</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}