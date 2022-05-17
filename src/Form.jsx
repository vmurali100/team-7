import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
             id:"",
             name:"",
             place:"",
             pin:""

         }
      }
    }
    handlechange=(e)=>{
        let newperson={...this.state.person}
        newperson[e.target.name]=e.target.value 
        this.setState({person:newperson})
    }
    handleenter=()=>{

    }
  render() {
    return (
      <div>
          <label htmlFor="">ID : </label>
          <input type="text" name="id" value={this.state.person.id} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />
          <label htmlFor="">Name : </label>
          <input type="text" name="name" value={this.state.person.name} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />
            <label htmlFor="">Place : </label>
            <input type="text" name="place" value={this.state.person.place} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />
            <label htmlFor="">Pin : </label>
            <input type="text" name="pin" value={this.state.person.pin} onChange={(e)=>{this.handlechange(e)}} id="" /> <br />

            <button type='button' onClick={this.handleenter}>Enter</button>
      
      </div>
    )
  }
}
