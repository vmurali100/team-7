import React, { Component } from 'react'
export default class Dog extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Student :[],
         deena :{
           Name:"",
           City:"",
           Email:"",
         },
         A : null
      }
    }
    handlechange=(e)=>{
      let newhandlechange = {...this.state.deena}
      newhandlechange[e.target.name]= e.target.value 
      this.setState({deena:newhandlechange})
    }
    btnchange=()=>{
      // console.log(this.state.deena)
      let newbtnchange =[...this.state.Student]
      newbtnchange.push({...this.state.deena})
      this.setState({Student:newbtnchange})
      localStorage.setItem("Student",JSON.stringify(newbtnchange))
       this.cleardeena()
    }
    cleardeena=()=>{
      this.setState({
        deena :{
          Name:"",
          City:"",
          Email:"",
        },
      })
    }

      editbtn=(i)=>{
        this.setState({deena: this.state.Student[i]})
        this.setState({A:i})
      }

      btnUpdate=()=>{
        let NewUpdate = [...this.state.Student]
        NewUpdate[this.state.A] = this.state.deena;
        this.setState({Student:NewUpdate,A:null})
        localStorage.setItem("Student",JSON.stringify(NewUpdate))
        this.cleardeena()
      }

    delbtn=(i)=>{
      let newdelbtn = this.state.Student.filter((hai,index)=>{
         return i !== index
      })
      this.setState({Student:newdelbtn})
    }

    componentDidMount(){
      let Room = JSON.parse(localStorage.getItem("Student"))
      this.setState({Student:Room})
    }

  render() {
    return (
      <div className='parent'>
          <div className='parentone'> 
         <form action="">
           <h4>Form</h4>
         <label htmlFor=""><b>Name </b> </label>
          <input type="text" name="Name" id="one" value={this.state.deena.Name} onChange={(e)=>{this.handlechange(e)}} /><br /><br />
          <label htmlFor=""><b>City</b></label>
          <input type="text" name="City" id="two" value={this.state.deena.City} onChange={(e)=>{this.handlechange(e)}} /><br /><br />
          <label htmlFor=""><b>Email</b></label>
          <input type="text" name="Email" id="three" value={this.state.deena.Email} onChange={(e)=>{this.handlechange(e)}} /> <br /><br />
         
          {this.state.A? <button type='button' onClick={this.btnUpdate}><b>Update</b></button>: <button type='button' onClick={this.btnchange}><b>Click</b></button>}
          
          

         </form>
          </div>

          <div className='parent2'>
              <table className='table' border='1' style={{'backgroundColor':'yellow'}}>
             <thead>
                <tr>
                   <th style={{'backgroundColor':'blue'}}>S.No :</th>
                   <th style={{'backgroundColor':'red'}}>Name</th>
                   <th style={{'backgroundColor':'black',color:'white'}}>City</th>
                   <th style={{'backgroundColor':'pink'}}>Email</th>
                   <th style={{'backgroundColor':'brown'}}>Edit</th>
                   <th style={{'backgroundColor':'green'}}>Delete</th>
                </tr>
             </thead>
             <tbody>
               {this.state.Student.map((Hello,i)=>{
                  return <tr>
                    <td>{i+1}</td>
                    <td>{Hello.Name}</td>
                    <td>{Hello.City}</td>
                    <td>{Hello.Email}</td>
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