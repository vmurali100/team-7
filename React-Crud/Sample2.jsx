import React, { Component } from 'react'

export default class Sample2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            StudentList: {
                StudentName: "",
                Idnumber: "",
                FatherName: "",
                phoneNumber: ""
            },
            StudentData: []
        }
    }
    ChangeHandler = (e) => {
        const newStdList = { ...this.state.StudentList }
        newStdList[e.target.name] = e.target.value
        this.setState({ StudentList: newStdList })

    }
    ClickHandler = () => {
        const newData = [...this.state.StudentData]
        newData.push({ ...this.state.StudentList })
        this.setState({ StudentData: newData })
        this.ClearForm()
    }
    ClearForm = () => {
        this.setState({
            StudentList: {
                StudentName: "",
                Idnumber: "",
                FatherName: "",
                phoneNumber: ""
            }
        })
    }
    DeleteHandler=(i)=>{
        const newData=this.state.StudentData.filter((StudentList,index)=>{
            return i !== index
        })
        this.setState({StudentData:newData})
    } 
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <form action="">
                            <tr>
                                <td><label htmlFor=""> Student Name</label></td>
                                <td> <input type="text" name="StudentName" value={this.state.StudentList.StudentName} onChange={(e) => { this.ChangeHandler(e) }} /></td>
                            </tr>
                            <tr>
                                <td> <label htmlFor=""> Idnumber</label></td>
                                <td><input type="number" name="Idnumber" value={this.state.StudentList.Idnumber} onChange={(e) => { this.ChangeHandler(e) }} /> </td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="">FatherName</label></td>
                                <td><input type="text" name="FatherName" value={this.state.StudentList.FatherName} onChange={(e) => { this.ChangeHandler(e) }} /> </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">phoneNumber</label></td>
                                <td><input type="text" name="phoneNumber" value={this.state.StudentList.phoneNumber} onChange={(e) => { this.ChangeHandler(e) }} /></td>
                            </tr>
                            <button type='button' onClick={this.ClickHandler}>Click</button>
                        </form>
                    </div>
                    <div class="col">
                        <table class="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>IdNumber</th>
                                    <th>Father Name</th>
                                    <th>Phone Number</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.StudentData.map((User, i) => {
                                    return <tr>
                                        <td>{i + 1}</td>
                                        <td>{User.StudentName}</td>
                                        <td>{User.Idnumber}</td>
                                        <td>{User.FatherName}</td>
                                        <td>{User.phoneNumber}</td>
                                        <td><button type='button' >Edit</button></td>
                                        <td><button type='button' onClick={() => { this.DeleteHandler(i) }}></button></td>
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
