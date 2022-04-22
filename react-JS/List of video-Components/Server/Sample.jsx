import axios from 'axios'
import React, { Component } from 'react'

export default class Vook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                Name: "",
                City: "",
                Email: "",
                Password: "",
            },
            man: [],
            sIndex: null
        }
    }
    getdatafromserver=()=>{
        axios.get("http://localhost:3000/name").then((res)=>{
            this.setState({man:res.data})
        })
    }
    handlechange = (e) => {
        let newhandlechange = { ...this.state.User }
        newhandlechange[e.target.name] = e.target.value
        this.setState({ User: newhandlechange })
    }
    handlesubmit = () => {
        axios.post("http://localhost:3000/name",this.state.User).then(()=>{
            this.getdatafromserver()
            this.clear()
        })
    }
    clear = () => {
        this.setState({
            User: {
                Name: "",
                City: "",
                Email: "",
                Password: "",
            },
        })
    }
    changeedit = (i) => {
        this.setState({ User: this.state.man[i] })
        this.setState({ sIndex: i })
    }
    handleUpdate = () => {
       axios.put("http://localhost:3000/name/" + this.state.User.id,this.state.User).then(()=>{
           this.getdatafromserver()
           this.clear()
           this.setState({sIndex:null})
           
       })
    }

    changedel = (i) => {
        axios.delete("http://localhost:3000/name/" + this.state.man[i].id).then(()=>{
            this.getdatafromserver()
        })
    }
    componentDidMount=()=>{
        this.getdatafromserver()
    }
    render() {
        return (
            <div className='container'>
                <div className='child'>
                    <form action="">
                        <label htmlFor="">Name</label>
                    <input type="text" name="Name" value={this.state.User.Name} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">City</label>
                    <input type="text" name="City" value={this.state.User.City} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Email</label>
                    <input type="text" name="Email" value={this.state.User.Email} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Password</label>
                    <input type="text" name="Password" value={this.state.User.Password} onChange={(e) => { this.handlechange(e) }} id="" /> 
                    <br /><br />

                    {this.state.sIndex !==null ? <button type='button' onClick={this.handleUpdate}>Update</button> : <button type='button' onClick={this.handlesubmit}>Submit</button>}
                    </form>
                </div>

                <div className='tablediv'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.man.map((gg,i)=>{
                                return <tr>
                                    <td>{i+1}</td>
                                    <td>{gg.Name}</td>
                                    <td>{gg.City}</td>
                                    <td>{gg.Email}</td>
                                    <td>{gg.Password}</td>
                                    <td><button onClick={()=>{this.changeedit(i)}}>Edit</button></td>
                                    <td><button onClick={()=>{this.changedel(i)}}>Delete</button></td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}