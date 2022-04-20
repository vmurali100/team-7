import React, { Component } from 'react'

export default class Stwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FirstArray: [],
            First: {
                Name: "",
                Age: "",
                Place: "",

            },
            sIndex: null

        }
    }

    handlechange = (e) => {
        let newFirst = { ...this.state.First }
        newFirst[e.target.name] = e.target.value
        this.setState({ First: newFirst })
    }
    Clickbutton = () => {
        // console.log(this.state.First)
        let Newbtn = [...this.state.FirstArray]
        Newbtn.push({ ...this.state.First })
        this.setState({ FirstArray: Newbtn })
        localStorage.setItem("FirstArray", JSON.stringify(Newbtn))
        this.ClearArray()
    }
    ClearArray = () => {
        this.setState({
            First: {
                Name: "",
                Age: "",
                Place: "",

            },
        })
    }
    EditBtn = (i) => {
        this.setState({ First: this.state.FirstArray[i] })
        this.setState({ sIndex: i })
    }

    Updatebutton = () => {
        let Newbtn = [...this.state.FirstArray]
        Newbtn[this.state.sIndex] = this.state.First;
        this.setState({FirstArray:Newbtn,sIndex:null})
        localStorage.setItem("FirstArray", JSON.stringify(Newbtn))
        this.ClearArray()

    }

    DeleteBtn = (i) => {
        const Newbtn = this.state.FirstArray.filter((First, index) => {
            return i !== index

        })
        this.setState({ FirstArray: Newbtn })
    }

    componentDidMount() {
        let Newbtn = JSON.parse(localStorage.getItem("FirstArray"))
        if (Newbtn) {
            this.setState({ FirstArray: Newbtn })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='parentone'>
                    <form action="">
                        <label htmlFor="">Name</label><br />
                        <input type="text" name="Name" value={this.state.First.Name} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                        <label htmlFor="">Age</label><br />
                        <input type="text" name="Age" value={this.state.First.Age} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                        <label htmlFor="">Place</label><br />

                        <input type="text" name="Place" value={this.state.First.Place} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />

                        {this.state.sIndex ? <button type='button' onClick={this.Updatebutton}>Update</button> : <button type='button' onClick={this.Clickbutton}>Click</button>
                        }

                    </form>
                </div>
                <div className='tablediv'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No:</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Place</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.FirstArray.map((sadik, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{sadik.Name}</td>
                                    <td>{sadik.Age}</td>
                                    <td>{sadik.Place}</td>
                                    <td><button className="btn btn-outline-warning" onClick={() => { this.EditBtn(i) }}> Edit</button></td>
                                    <td><button className="btn btn-outline-danger" onClick={() => { this.DeleteBtn(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
