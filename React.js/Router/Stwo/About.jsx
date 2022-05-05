// import './Sfour.css'
import React, { Component } from 'react'

export  class About extends Component {
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
    handlechange=(e)=>{
      let newhandlechange = {...this.state.sadik}
      newhandlechange[e.target.name]= e.target.value 
      this.setState({sadik:newhandlechange})
    }
    btnchange=()=>{
      // console.log(this.state.sadik)
      let newbtnchange =[...this.state.Allsadik]
      newbtnchange.push({...this.state.sadik})
      this.setState({Allsadik:newbtnchange})
      localStorage.setItem("Allsadik",JSON.stringify(newbtnchange))
       this.clearsadik()
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
        let NewUpdate = [...this.state.Allsadik]
        NewUpdate[this.state.sIndex] = this.state.sadik;
        this.setState({Allsadik:NewUpdate,sIndex:null})
        localStorage.setItem("Allsadik",JSON.stringify(NewUpdate))
        this.clearsadik()
      }

    delbtn=(i)=>{
      let newdelbtn = this.state.Allsadik.filter((hai,index)=>{
         return i !== index
      })
      this.setState({Allsadik:newdelbtn})
    }

    componentDidMount(){
      let Newll = JSON.parse(localStorage.getItem("Allsadik"))
      this.setState({Allsadik:Newll})
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
         
          {this.state.sIndex !==null ? <button type='button' onClick={this.btnUpdate}><b>Update</b></button>: <button type='button' onClick={this.btnchange}><b>Click</b></button>}
          
          

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
