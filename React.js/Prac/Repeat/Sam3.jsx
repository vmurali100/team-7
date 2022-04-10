import React, { Component } from 'react'

export default class Sam3 extends Component {
    constructor() {
      super()
    
      this.state = {
          item : {
              Pen :"",
              Book :"",
              School :""
          }
      }
    }
    handlechange=(e)=>{
        let newitem = {...this.state.item}
        newitem[e.target.name] = e.target.value
        this.setstate({item : newitem})
    }
    handleclick=()=>{
        console.log(this.state.item)
    }
  render() {
    return (
      <div>
          <label htmlFor="">Pen :</label>
          <input type="text" name="Pen" value={this.state.Pen} onChange = {(e)=>{this.handleChange(e)}} id="" /> <br /><br />
          <label htmlFor="">Book :</label>
          <input type="text" name="Book" value={this.state.Book} onChange = {(e)=>{this.handleChange(e)}} id="" /> <br /><br />

          <label htmlFor="">School :</label>
          <input type="text" name="School" value={this.state.School} onChange = {(e)=>{this.handleChange(e)}} id="" /> <br /><br />

        <button onClick={this.handleclick}>Click</button>
      
      </div>
    )
  }
}
