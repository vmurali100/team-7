import axios from "axios";
import { Component } from "react";
export default class ServerData extends Component {
    constructor() {
        super()
        this.state = {
            Car: {
                carname: "",
                brand: "",
                color: "",
                model: ""
            },
            allUser: [],
            Sindex: null
        }
    }
    Handlechange=(e)=>{
        let newCar={...this.state.Car}
        newCar[e.target.name]=e.target.value
        this.setState({Car:newCar})
    }

    SubmitData=()=>{
        axios.post("http://localhost:3000/Cars",this.state.Car).then(()=>{
            console.log('Sucsses')
            this.GetdataFromServer()
            this.ClearForm()

        })
    }

    GetdataFromServer=()=>{
        axios.get("http://localhost:3000/Cars").then((res)=>{
        console.log('response',res)
        this.setState({allUser:res.data})
        })
    }
     
    componentDidMount=()=>{
        this.GetdataFromServer()
    }

    ClearForm=()=>{
        this.setState({Car: {
            carname: "",
            brand: "",
            color: "",
            model: ""
        }
        })
    }

    EditHandler=(i)=>{
        this.setState({Car:this.state.allUser[i]})
        this.setState({ Sindex:i})
    }

    DeleteHandler=(i)=>{
     axios.delete("http://localhost:3000/Cars/"+this.state.allUser[i].id).then(()=>{
         this.GetdataFromServer()
     })
    }
    UpdatetData=()=>{

        axios.put("http://localhost:3000/Cars/"+this.state.Car.id,this.state.Car).then(()=>{
            this.GetdataFromServer()
            this.ClearForm()
            this.setState({Sindex:null})
        })
    }



    render() {
        let { carname, brand, color, model } = this.state.Car
        return <div className="container">
            <div className="row">
                <div className="col">
                    <form action="">
                        <tr>
                            <td><label htmlFor="">carname</label></td>
                            <td><input type="text" name="carname" value={carname} onChange={(e) => { this.Handlechange(e) }} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="">brand</label></td>
                            <td><input type="text" name="brand" value={brand} onChange={(e) => { this.Handlechange(e) }} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="">color</label></td>
                            <td><input type="text" name="color" value={color} onChange={(e) => { this.Handlechange(e) }} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="">model</label></td>
                            <td><input type="text" name="model" value={model} onChange={(e) => { this.Handlechange(e) }} /></td>
                        </tr>
                            {this.state.Sindex !== null ? <button type="button" className="btn btn-success" onClick={this.UpdatetData}>Update</button>:<button type="button" className="btn btn-success" onClick={this.SubmitData}>Submit</button>}
                        
                        


                    </form>
                </div>
                <div className="col">
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                
                                <th>carname</th>
                                <th>brand</th>
                                <th>color</th>
                                <th>model</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allUser.map((User,i)=>{
                                return <tr>
                                    <td>{User.carname}</td>
                                    <td>{User.brand}</td>
                                    <td>{User.color}</td>
                                    <td>{User.model}</td>
                                    <td><button onClick={()=>{this.EditHandler(i)}}>Edit</button> </td>
                                    <td><button onClick={()=>{this.DeleteHandler(i)}}>Delete</button> </td>

                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}