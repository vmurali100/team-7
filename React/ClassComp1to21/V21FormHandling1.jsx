import React, { Component } from 'react'

export default class FormHnadle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Cars:{
             Car:"",
             Model:"",
             Price:"",
             Color:"",
             MadeIn:"",
             Engine:""
         }
      }
    }
    Display=(e)=>{
        let NewCar = {...this.state.Cars}
        NewCar[e.target.name] = e.target.value
        this.setState ({Cars : NewCar})
    }
    DisplayBottum=()=>{
        console.log(this.state.Cars)
    }
  render() {
    return (
      <form>
          <label htmlFor="">Car : </label>
          <input type="text" name="Car" value={this.state.Car} onChange={this.Display}/><br />
          
          <label htmlFor="">Model : </label>
          <input type="text" name="Model" id="" value={this.state.Model} onChange={this.Display}/><br />
          
          <label htmlFor="">Price : </label>
          <input type="text" name="Price" id="" value={this.state.Price} onChange={this.Display}/><br />
          
          <label htmlFor="">Color : </label>
          <input type="text" name="Color" id="" value={this.state.Color} onChange={this.Display}/><br />
          
          <label htmlFor="">MadeIn : </label>
          <input type="text" name="MadeIn" id="" value={this.state.MadeIn} onChange={this.Display}/><br />
          
          <label htmlFor="">Engine : </label>
          <input type="text" name="Engine" id="" value={this.state.Engine} onChange={this.Display}/><br />

          <button onClick={this.DisplayBottum}>Submit</button>
      </form>
    )
  }
}
