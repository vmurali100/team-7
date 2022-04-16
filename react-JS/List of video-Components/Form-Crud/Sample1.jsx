import React, { Component } from 'react'

export default class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: {
                Name: "",
                Email: ""
            },
            Alldata :[

            ]
        }
    }
    handlechange = (e) => {
        let newfirst = { ...this.state.first }
        newfirst[e.target.name] = e.target.value
        this.setState({ first: newfirst })
    }
    deenaclick = () => {
        // console.log(this.state.first)
        let newtwo = [...this.state.Alldata]
        newtwo.push({...this.state.first})
        this.setState({Alldata:newtwo})
        this.Cleardeena()
    }
    Cleardeena =()=>{
        this.setState({
            first: {
                Name: "",
                Email: "",
            },
        })
    }

    Deletebtn=(i)=>{
        let newthree = this.state.Alldata.filter((first,index)=>{
                return i !== index
        })
        this.setState({Alldata:newthree})
    }
    
    render() {
        return (
            <div className='parent'>
                <div className='parentone'>
                   <form action="">
                   <tr>
                       <td><label htmlFor="">Name</label></td>
                       <td><input type="text" name="Name" value={this.state.first.Name} onChange={(e) => { this.handlechange(e) }} id="" /><br /><br /></td>
                   </tr>
                   <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="text" name="Email" value={this.state.first.Email} onChange={(e) => { this.handlechange(e) }} id="" /><br /></td>
                   </tr>


                    <button type='button' onClick={this.deenaclick}>Submit</button>
                   </form>
                </div>
                <div className='table'>
                    <table className='tableone'>
                        <thead>
                            <tr>
                                <th>S.No:</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Alldata.map((sadik,i)=>{
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{sadik.Name}</td>
                                    <td>{sadik.Email}</td>

                                    <td><button className='btn btn-warning'> Edit</button></td>
                                    <td><button className='btn btn-danger' onClick={()=>{this.Deletebtn(i)}}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
