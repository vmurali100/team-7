import './Server3.css'
import React, { Component } from 'react'
import axios from 'axios'
export default class Server3 extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Allsadik :[],
         sadik :{
           Name:"",
           Place:"",
           Game:"",
         },
         sIndex : null
      }
    }
    getdatafromserver=()=>{
        axios.get("http://localhost:3000/hello").then((aa)=>{
            this.setState({Allsadik:aa.data})
        })
    }
    handlechange=(e)=>{
      let newhandlechange = {...this.state.sadik}
      newhandlechange[e.target.name]= e.target.value 
      this.setState({sadik:newhandlechange})
    }
    btnchange=()=>{
        axios.post("http://localhost:3000/hello",this.state.sadik).then(()=>{
            this.getdatafromserver()
            this.clearsadik()
        })
    }
    clearsadik=()=>{
      this.setState({
        sadik :{
          Name:"",
          Place:"",
          Game:"",
        },
      })
    }

      editbtn=(i)=>{
        this.setState({sadik: this.state.Allsadik[i]})
        this.setState({sIndex:i})
      }

      btnUpdate=()=>{
       axios.put("http://localhost:3000/hello/"+this.state.sadik.id,this.state.sadik).then(()=>{
           this.getdatafromserver()
           this.clearsadik()
           this.setState({sIndex:null})
       })
      }

    delbtn=(i)=>{
      axios.delete("http://localhost:3000/hello/"+this.state.Allsadik[i].id).then(()=>{
          this.getdatafromserver()
      })
    }

    componentDidMount(){
        this.getdatafromserver()

    }

  render() {
    return (
      <div className='parent'>
          <div className='parentone'> 
         <form action="">
           <h4>Form</h4>
         <label htmlFor=""><b>Name :</b> </label>
          <input type="text" name="Name" id="one" value={this.state.sadik.Name} onChange={(e)=>{this.handlechange(e)}} /><br /><br />
          <label htmlFor=""><b>Place :</b></label>
          <input type="text" name="Place" id="two" value={this.state.sadik.Place} onChange={(e)=>{this.handlechange(e)}} /><br /><br />
          <label htmlFor=""><b>Game :</b></label>
          <input type="text" name="Game" id="three" value={this.state.sadik.Game} onChange={(e)=>{this.handlechange(e)}} /> <br /><br />
         
          {this.state.sIndex ? <button type='button' onClick={this.btnUpdate}><b>Update</b></button>: <button type='button' onClick={this.btnchange}><b>Click</b></button>}
          
          

         </form>
          </div>

          <div className='parenttwo'>
              <table className='table' border='1' style={{'backgroundColor':'yellow'}}>
             <thead>
                <tr>
                   <th style={{'backgroundColor':'blue'}}>S.No :</th>
                   <th style={{'backgroundColor':'red'}}>Name :</th>
                   <th style={{'backgroundColor':'black',color:'white'}}>Place :</th>
                   <th style={{'backgroundColor':'pink'}}>Game :</th>
                   <th style={{'backgroundColor':'brown'}}>Edit</th>
                   <th style={{'backgroundColor':'green'}}>Delete</th>
                </tr>
             </thead>
             <tbody>
               {this.state.Allsadik.map((dude,i)=>{
                  return <tr>
                    <td>{i+1}</td>
                    <td>{dude.Name}</td>
                    <td>{dude.Place}</td>
                    <td>{dude.Game}</td>
                    <td><button className='warning' onClick={()=>{this.editbtn(i)}}>Edit</button></td>
                    <td><button className='danger' onClick={()=>{this.delbtn(i)}}>Delete</button></td>
                  </tr>
               })}
             </tbody>
              </table>
          </div>

      </div>
    )
  }
}
