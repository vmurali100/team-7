import React, { Component } from 'react'

export default class Deena extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: {
                Name: '',
                Email: '',
                Password: '',

            },
            AllData: [
            ]
        }
    }
    handlechange = (e) => {
        let newA = { ...this.state.first }
        newA[e.target.name] = e.target.value
        this.setState({ first: newA })
    }
    handleSubmit = () => {
        let newB = [...this.state.AllData]
        newB.push({ ...this.state.first })
        this.setState({ AllData: newB })
        this.ClearForm()
    }
    ClearForm = () => {
        this.setState({ first: {
            Name: '',
            Email: '',
            Password: ''

        }

        })
    }

    Deletebtn = (i) => {
        let newC = this.state.AllData.filter((first, index) => {
            return i !== index
        })
        this.setState({ AllData: newC })
    }
    render() {
        return (

            <div className="container">
                <div style={{ 'backgroundColor': 'blue' }} className="row">
                    <div className='raju1' style={{ 'backgroundColor': 'red', height: '250px' }} className="col">
                        <form style={{ 'backgroundColor': 'white', 'width': '200px', position: 'relative', 'right': '-220px', height: '225px', top: '10px' }} action="">
                            <div className='raju2' style={{ position: 'relative', 'right': '-5px', }}>
                                <label htmlFor="">Name</label>
                                <input type="text" name="Name" id="" value={this.state.first.Name} onChange={(e) => { this.handlechange(e) }} /><br />
                            </div>
                            <div  className='raju3' style={{ position: 'relative', 'right': '-5px' }}>
                                <label htmlFor="">Email</label>
                                <input type="text" name="Email" id="" value={this.state.first.Email} onChange={(e) => { this.handlechange(e) }} /><br />
                            </div>
                            <div className='raju4z' style={{ position: 'relative', 'right': '-5px' }}>
                                <label htmlFor="">Password</label>
                                <input type="text" name="Password" id="" value={this.state.first.Password} onChange={(e) => { this.handlechange(e) }} /><br />
                            </div><br />

                            <button type='button' onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.AllData.map((Moon, i) => {
                                    return <tr>
                                        <td>{i + 1}</td>
                                        <td>{Moon.Name}</td>
                                        <td>{Moon.Email}</td>

                                        <td><button className='"btn btn-warning"'>Edit</button></td>
                                        <td><button className='"btn btn-danger"' onClick={() => { this.Deletebtn(i) }}> Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
