import axios from 'axios'
import React, { Component } from 'react'

export default class Skl extends Component {
    constructor(props) {
        super(props)

        this.state = {
             Rose: {
                Name: "",
                Color: "",
                Price: "",
            },
            Abcd: [],
            sIndex: null
        }
    }
    getdatafromserver=()=>{
        axios.get("http://localhost:3000/man").then((res)=>{
            this.setState({Abcd:res.data})
        })
    }
    handlechange = (e) => {
        let newhandlechange = { ...this.state.Rose }
        newhandlechange[e.target.name] = e.target.value
        this.setState({ Rose: newhandlechange })
    }
    handlesubmit = () => {
        axios.post("http://localhost:3000/man",this.state.Rose).then(()=>{
            this.getdatafromserver()
            this.clear()
        })
    }
    clear = () => {
        this.setState({
            Rose: {
                Name: "",
                Color: "",
                Price: "",
            },
        })
    }
    changeedit = (i) => {
        this.setState({ Rose: this.state.Abcd[i] })
        this.setState({ sIndex: i })
    }
    handleUpdate = (i) => {
       axios.put("http://localhost:3000/man/" + this.state.Rose.id,this.state.Rose).then(()=>{
           this.getdatafromserver()
           this.clear()
           this.setState({sIndex:null})
           
       })
    }

    changedel = (i) => {
        axios.delete("http://localhost:3000/man/" + this.state.Abcd[i].id).then(()=>{
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
                        <label htmlFor="">Fruit Name</label>
                    <input type="text" name="FruitName" value={this.state.Rose.Name} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Color</label>
                    <input type="text" name="Color" value={this.state.Rose.Color} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Price</label>
                    <input type="text" name="Price" value={this.state.Rose.Price} onChange={(e) => { this.handlechange(e) }} id="" /> 
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
                                <th>Color</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Abcd.map((person, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{person.Name}</td>
                                    <td>{person.Color}</td>
                                    <td>{person.Price}</td>
                                    <td><button type='button'  onClick={() => { this.changeedit(i) }}>Edit</button></td>
                                    <td><button type='button'  onClick={() => { this.changedel(i) }}>Delete</button></td>


                                </tr>

                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}