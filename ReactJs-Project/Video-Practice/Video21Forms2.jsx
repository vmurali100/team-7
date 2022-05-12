import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Person:{
          name:'',
          Id:'',
          Password:''
         }
      }
    }
    onchange=(e)=>{
        let Newperson={...this.state.Person}
        Newperson[e.target.name]=e.target.value
        this.setState({Person:Newperson})
        }

        changebutton=()=>{  
            console.log(this.state.Person)
        }
  render() {
    return (
     <form >
        
          <label htmlFor="">UserName</label>
          <input type="text" name='name' value={this.state.name} onChange={this.onchange} /><br />
      

      
          <label htmlFor="">Id</label>
          <input type="text" name='Id' value={this.state.Id} onChange={this.onchange} /><br />
      

      
          <label htmlFor="">Password</label>
          <input type="text" name='Password' value={this.state.Password} onChange={this.onchange} /><br />
      
      <button type='button' onClick={this.changebutton}>Submit</button>
     </form>
      
      
    )
  }
}
