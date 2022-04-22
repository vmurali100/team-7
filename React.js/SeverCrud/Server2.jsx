import axios from 'axios'
import React, { Component } from 'react'

export default class Server2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Fruit: {
                FruitName: "",
                Color: "",
                Taste: "",
                Price: "",
            },
            Allfruits: [],
            sIndex: null
        }
    }
    getdatafromserver=()=>{
        axios.get("http://localhost:3000/man").then((res)=>{
            this.setState({Allfruits:res.data})
        })
    }
    handlechange = (e) => {
        let newhandlechange = { ...this.state.Fruit }
        newhandlechange[e.target.name] = e.target.value
        this.setState({ Fruit: newhandlechange })
    }
    handlesubmit = () => {
        axios.post("http://localhost:3000/man",this.state.Fruit).then(()=>{
            this.getdatafromserver()
            this.clear()
        })
    }
    clear = () => {
        this.setState({
            Fruit: {
                FruitName: "",
                Color: "",
                Taste: "",
                Price: "",
            },
        })
    }
    changeedit = (i) => {
        this.setState({ Fruit: this.state.Allfruits[i] })
        this.setState({ sIndex: i })
    }
    handleUpdate = (i) => {
       axios.put("http://localhost:3000/man/" + this.state.Fruit.id,this.state.Fruit).then(()=>{
           this.getdatafromserver()
           this.clear()
           this.setState({sIndex:null})
           
       })
    }

    changedel = (i) => {
        axios.delete("http://localhost:3000/man/" + this.state.Allfruits[i].id).then(()=>{
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
                    <input type="text" name="FruitName" value={this.state.Fruit.FruitName} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Color</label>
                    <input type="text" name="Color" value={this.state.Fruit.Color} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Taste</label>
                    <input type="text" name="Taste" value={this.state.Fruit.Taste} onChange={(e) => { this.handlechange(e) }} id="" /> <br /><br />
                    <label htmlFor="">Price</label>
                    <input type="text" name="Price" value={this.state.Fruit.Price} onChange={(e) => { this.handlechange(e) }} id="" /> 
                    <br /><br />

                    {this.state.sIndex !==null ? <button type='button' onClick={this.handleUpdate}>Update</button> : <button type='button' onClick={this.handlesubmit}>Submit</button>}
                    </form>
                </div>

                <div className='tablediv'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>FruitName</th>
                                <th>Color</th>
                                <th>Taste</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Allfruits.map((person, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{person.FruitName}</td>
                                    <td>{person.Color}</td>
                                    <td>{person.Taste}</td>
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
