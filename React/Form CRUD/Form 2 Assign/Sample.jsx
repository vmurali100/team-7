import React, { Component } from 'react'

export default class Sample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserData: {
                fname: "",
                lname: "",
                mail: "",
                pass: "",
                city: "",
                Search: "",
                SelectValue: "",
            },
            AllInfo:[]
        }
    }
    AllData=(e)=>{
        let User = {...this.state.UserData}
        User[e.target.name] = e.target.value
        this.setState({UserData:User})
    }

    ChangeButton=()=>{
        let NewUser = [...this.state.AllInfo]
        NewUser.push({...this.state.UserData})
        this.setState({AllInfo:NewUser})
    }
    Clear=()=>{
        this.setState({
            UserData: {
                fname: "",
                lname: "",
                mail: "",
                pass: "",
                city: "",
                Search: "",
                SelectValue: ""
            }
        })
    }
    ChangeDelete=(i)=>{
        let Del = this.state.AllInfo.filter((ABC,index)=>{
            return i !== index
        })
        this.setState({UserData:Del})
    }
    render() {
        return (
            <div className='AParent'>
                <div className='BParent'>
                    <b>Form Validation</b>
                    <hr />
                    <div id='ChildA'>
                        <label htmlFor="">First Name</label><br />
                        <input type="text" name="fname" id="" value={this.state.UserData.fname} onChange={(e)=>{this.AllData(e)}} placeholder="First Name" /><br />

                        <label htmlFor="">Email</label><br />
                        <input type="text" name="mail" id="" value={this.state.UserData.mail} onChange={(e)=>{this.AllData(e)}} placeholder="Email" /><br />

                        <label htmlFor="">City</label><br />
                        <input type="text" name="city" id="" value={this.state.UserData.city} onChange={(e)=>{this.AllData(e)}} placeholder="City" /><br />

                        <input type="file" name="Search" id="" value={this.state.UserData.Search} onChange={(e)=>{this.AllData(e)}} placeholder="Choose file..." />

                        <input type="radio" name="" id="" />Toogle this custom radio
                    </div>
                    <div id='ChildB'>
                        <label htmlFor="">Last Name</label><br />
                        <input type="text" name="lname" id="" value={this.state.UserData.lname} onChange={(e)=>{this.AllData(e)}} placeholder="Last Name" /><br />

                        <label htmlFor="">Password</label><br />
                        <input type="text" name="pass" id="" value={this.state.UserData.pass} onChange={(e)=>{this.AllData(e)}} placeholder="password" /><br />

                        <label htmlFor="">Select any value</label><br />
                        <input type="number" name="SelectValue" id="" value={this.state.UserData.SelectValue} onChange={(e)=>{this.AllData(e)}} /><br />

                        <input type="checkbox" name="" id="" />Check this custom Checkboxbr <br />

                        <input type="radio" name="" id="" />Or Toogle this other custom radio
                    </div>
                    <hr />
                    <button type='button' onClick={this.ChangeButton}>Submit Form</button>
                </div>
                <div ></div>
                <table className='table table-smA'>
                    <thead>
                        <tr>
                            <th>s no</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>City</th>
                            <th>Select any value</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.AllInfo.map((Ex,i)=>{
                            return <tr>
                                <td>{i+1}</td>
                                <td>{Ex.fname}</td>
                                <td>{Ex.lname}</td>
                                <td>{Ex.mail}</td>
                                <td>{Ex.pass}</td>
                                <td>{Ex.city}</td>
                                <td>{Ex.Search}</td>
                                <td>{Ex.SelectValue}</td>
                                <td><button className='btn btn-outline-warning'>Edit</button></td>
                                <td><button className='btn btn-outline-danger' onClick={()=>{this.ChangeDelete(i)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
