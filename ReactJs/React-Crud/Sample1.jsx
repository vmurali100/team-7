import React, { Component } from 'react'

export default class NewSample1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Userdata: {
                UserName: '',
                Password: '',
                Email: '',
                MobileNumber: ''
            },

            UserDetails: []
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
        // console.log(newuserDetails)
        this.ClearForm()
    }
    ClearForm = () => {
        this.setState({
            Userdata: {
                UserName: '',
                Password: '',
                Email: '',
                MobileNumber: ''
            }

        })

    }
    DeleteButton=(i)=>{
     const newuserDetails= this.state.UserDetails.filter((Userdata,index)=>{
        return i !==index
     })
     this.setState({UserDetails:newuserDetails})
    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col" id='raju'>
                        <form action="">

                            <tr>
                                <td><label htmlFor="">UserName</label></td>
                                <td><input type="text" name="UserName" value={this.state.Userdata.UserName} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>
                            </tr>

                            <tr>
                                <td><label htmlFor="">Password</label></td>
                                <td><input type="password" name="Password" value={this.state.Userdata.Password} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>
                            </tr>

                            <tr>
                                <td><label htmlFor="">Email</label></td>
                                <td><input type="text" name="Email" value={this.state.Userdata.Email} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>

                            </tr>

                            <tr>
                                <td><label htmlFor="">MobileNumber</label></td>
                                <td><input type="number" name="MobileNumber" value={this.state.Userdata.MobileNumber} onChange={(e) => { this.changehanadler(e) }} /> <br /><br /></td>
                            </tr>


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
                                        <td><button className="btn btn-danger" onClick={()=>{this.DeleteButton(i)}}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        )
    }
}
