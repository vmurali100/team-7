import React, { Component } from 'react'

export default class Stwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            First: {
                Name: "",
                Age: "",
                Place: "",
            },
            FirstArray: []
        }
    }

    handlechange = (e) => {
        let newFirst = {...this.state.First}
        newFirst[e.target.name] = e.target.value
        this.setState({ First: newFirst })
    }
    Clickbutton = () => {
        let Newbtn = [...this.state.FirstArray]
        Newbtn.push = ({ ...this.state.First })
        this.setState({ FirstArray: Newbtn })
        this.ClearArray()
    }
    ClearArray = () => {
        this.setState({
            First: {
                Name: "",
                Age: "",
                Place: ""
            }
        })
    }
    render() {
        return (
            <div className='parent'>
                <div className='parentone'>
                    <form action="">

                        <label htmlFor="">Name</label><br />
                        <input type="text" name="Name" value={this.state.First.Name} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />

                        <label htmlFor="">Age</label><br />
                        <input type="text" name="Age" value={this.state.First.Age} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />

                        <label htmlFor="">Place</label><br />
                        <input type="text" name="Place" value={this.state.First.Place} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />

                        <button type='button' onClick={this.Clickbutton}>Click</button>
                    </form>
                </div>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No:</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.FirstArray.map((sadik, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{sadik.Name}</td>
                                    <td>{sadik.Age}</td>
                                    <td>{sadik.Place}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}