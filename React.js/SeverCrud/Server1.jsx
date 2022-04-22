import React, { Component } from 'react'
import axios from 'axios'

export default class Server1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first :{
             Fname:"",
             Lname:"",
             Age:"",
         },
         allfirst:[],
         sIndex:null
      }
    }

    getfromsever=()=>{
        axios.get("http://localhost:3000/hai").then((ss)=>{            
            this.setState({allfirst:ss.data})
        })    
    }

    handlechange=(e)=>{
        let newhandlechange = {...this.state.first}
         newhandlechange[e.target.name] = e.target.value 
         this.setState({first:newhandlechange})
    }

    clear=()=>{
        this.setState({
            first :{
                Fname:"",
                Lname:"",
                Age:"",
            },
        })
    }

    handleedit=(i)=>{
        this.setState({first:this.state.allfirst[i]})
        this.setState({sIndex:i})
    }    

    handledel=(i)=>{
       axios.delete("http://localhost:3000/hai/"+ this.state.allfirst[i].id).then(()=>{
        this.getfromsever()
       })
    }
    
    handleclick=()=>{
       axios.post("http://localhost:3000/hai",this.state.first).then(()=>{
        this.getfromsever()
        this.clear()
       })
    }

    handleUpdate =()=>{
        axios.put("http://localhost:3000/hai/"+this.state.first.id,this.state.first).then(()=>{
            this.getfromsever()
        this.clear()
        this.setState({sIndex:null})
        })
    }
    
    componentDidMount=()=>{
       this.getfromsever()
    }
    
  render() {
    return (
      <div className='container'>
          <div className='child'>
            <form action="">
                <label htmlFor="">Fname</label>
                <input type="text" name="Fname" value={this.state.first.Fname} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />
                <label htmlFor="">Lname</label>
                <input type="text" name="Lname" value={this.state.first.Lname} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />
                <label htmlFor="">Age</label>
                <input type="text" name="Age" value={this.state.first.Age} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />
               
               {this.state.sIndex !==null ? <button type='button' onClick={this.handleUpdate}>Update</button>:<button type='button' onClick={this.handleclick}>Click</button> }
                
                

            </form>
          </div>

          <div className='tablediv'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.allfirst.map((hai,i)=>{
                        return <tr>
                            <td>{hai.Fname}</td>
                            <td>{hai.Lname}</td>
                            <td>{hai.Age}</td>
                            <td><button onClick={()=>{this.handleedit(i)}}>Edit</button></td>
                            <td><button onClick={()=>{this.handledel(i)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
          </div>
      </div>
    )
  }
}
