import React, { Component } from 'react'

export default class WWE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Student:{
          name:'',
          Age:'',
          City:''
         }
      }
    }
    onchange=(e)=>{
        let Newperson={...this.state.Student}
        Newperson[e.target.name]=e.target.value
        this.setState({Student:Newperson})
        }

        changebutton=()=>{  
            console.log(this.state.Student)
        }
  render() {
    return (
     <form >
        
          <label htmlFor="">Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.onchange} /><br />
      

      
          <label htmlFor="">Age</label>
          <input type="text" name='Age' value={this.state.Id} onChange={this.onchange} /><br />
      

      
          <label htmlFor="">City</label>
          <input type="text" name='City' value={this.state.City} onChange={this.onchange} /><br />
      
      <button type='button' onClick={this.changebutton}>Submit</button>
     </form>
      
      
    )
  }
}
