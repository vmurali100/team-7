import { Component } from "react";

export default class Run extends Component {
    constructor(props) {
        super(props)
        this.state = {
            User: [],
            person: {
                name: '',
                mobile: '',
                city: '',
                email: '',
                office: '',
            },
            A: null
        }
    }
    handlechange=(e)=>{
        let newhandlechange={...this.state.person}
        newhandlechange[e.target.name]=e.target.value 
        this.setState({person:newhandlechange})
    }
    btnchange=()=>{
        let newbtnchange=[...this.state.User]
        newbtnchange.push({User:newbtnchange})
        this.setState({person:newbtnchange})
        localStorage.setItem("User",JSON.stringify(newbtnchange))
        this.cleardeena()
    }
    cleardeena=()=>{
        this.setState({
            person: {
                name: '',
                mobile: '',
                city: '',
                email: '',
                office: '',
            },
        })
    } 
    editbtn=(i)=>{
        this.setState({deena:this.state.User[i]})
        this.setState({A:i})
    }
    btnupdate=()=>{
        let NewUpdate=[...this.state.User]
        NewUpdate[this.state.A]=this.state.deena;
        this.setState({User:NewUpdate,A:null})
        localStorage.setItem("User",JSON.stringify(NewUpdate))
        this.cleardeena()
    }
    delbtn=(i)=>{
        let newdelbtn=this.state.User.filter((hai,index)=>{
            return i !==index
        })
        this.setState({User:newdelbtn})
    }
    componentDidMount(){
        let Seen =JSON.parse(localStorage.getItem("User"))
        this.setState({User:Seen})
    }
    render() {
        return (
            <div className="parent">
                <div className="parent1">
                    <form action="">

                        <label htmlFor="">name</label>
                        <input type="text" name="name" id="A" value={this.state.person.name} onChange={(e) => { this.handlechange(e) }} /><br />
                        <label htmlFor="">mobile</label>
                        <input type="text" name="mobile" id="B" value={this.state.person.mobile} onChange={(e) => { this.handlechange(e) }} /> <br />
                        <label htmlFor="">city</label>
                        <input type="text" name="city" id="C" value={this.state.person.city} onChange={(e) => { this.handlechange(e) }} /> <br />
                        <label htmlFor="">email</label>
                        <input type="text" name="email" id="D" value={this.state.person.email} onChange={(e) => { this.handlechange(e) }} /> <br />
                        <label htmlFor="">office</label>
                        <input type="text" name="office" id="E" value={this.state.person.office} onChange={(e) => { this.handlechange(e) }} /> <br />

                        {this.state.A ? <button type="button" onClick={this.btnupdate}><b>Update</b></button> : <button type="button" onClick={this.btnchange}>Click</button>}

                    </form>
                </div>
                <div className="[parent2">
                    <table className="table" border='1' style={{ 'backgroundColor': 'red' }}>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>mobile</th>
                                <th>city</th>
                                <th>email</th>
                                <th>office</th>
                            </tr>
                        </thead>
                    </table>
                    <tbody>
                        {this.state.User.map((hello, i) => {
                            return <tr>
                                <td>{hello.name}</td>
                                <td>{hello.mobile}</td>
                                <td>{hello.city}</td>
                                <td>{hello.email}</td>
                                <td>{hello.office}</td>
                                <td><button className="warning" onClick={() => { this.editbtn(i) }}>Edit</button></td>
                                <td><button className="denger" onClick={() => { this.delbtn(i) }}>Delete</button></td>

                            </tr>
                        })}
                    </tbody>
                </div>

            </div>
        )
    }
}