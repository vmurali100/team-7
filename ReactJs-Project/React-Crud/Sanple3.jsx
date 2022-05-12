import { Component } from "react";

export class FormC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Cricket: {
                playername: "",
                jersyno: "",
                age: "",
                role: ""
            },
            CricketP: []
        }
    }
    Handler = (e) => {
        const newPlayer = { ...this.state.Cricket }
        newPlayer[e.target.name] = e.target.value
        this.setState({ Cricket: newPlayer })
    }
    ClickHandler = () => {
        // console.log(this.state.Cricket)
        const NewPlayers = [...this.state.CricketP]
        NewPlayers.push({ ...this.state.Cricket })
        this.setState({ CricketP: NewPlayers })
        this.clearForm()
    }
    clearForm=()=>{
        this.setState({ Cricket: {
            playername: "",
            jersyno: "",
            age: "",
            role: ""
        }

        })
    }
    DeleteEvent=(i)=>{
        const NewPlayers = this.state.CricketP.filter((Abc,index)=>{
            return i !== index
        })
        this.setState({CricketP:NewPlayers})
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col">
                    <form action="">
                        <tr>
                            <td><label htmlFor="">PlayerName</label></td>
                            <td><input type="text" name="playername" value={this.state.Cricket.playername} onChange={(e) => { this.Handler(e) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">jersyno</label></td>
                            <td><input type="number" name="jersyno" value={this.state.Cricket.jersyno} onChange={(e) => { this.Handler(e) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">age</label></td>
                            <td><input type="number" name="age" value={this.state.Cricket.age} onChange={(e) => { this.Handler(e) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">role</label></td>
                            <td><input type="text" name="role" value={this.state.Cricket.role} onChange={(e) => { this.Handler(e) }} /></td>
                        </tr>
                        <button type="button"  onClick={this.ClickHandler} > Click on me</button>
                    </form>
                </div>
                        <div className="col">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Sl/no</th>
                                    <th>Player Name</th>
                                    <th>Jersy No</th>
                                    <th>Age</th>
                                    <th>Role</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.CricketP.map((Employee, i) => {
                                    return <tr>
                                        <td>{i + 1}</td>
                                        <td>{Employee.playername}</td>
                                        <td>{Employee.jersyno}</td>
                                        <td>{Employee.age}</td>
                                        <td>{Employee.role}</td>
                                        <td><button className="btn btn-warning">Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>{this.DeleteEvent(i)}}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        
    }
}