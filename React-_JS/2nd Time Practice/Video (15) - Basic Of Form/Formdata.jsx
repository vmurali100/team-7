import React, { Component } from 'react'

export default class Aswin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Student:{
             Rollno:'',
             Attendence:'',
             Mark:'',
             Holiday:''
         }
      }
    }
    ChaengeElmet=(e)=>{
        let NewState={...this.state.Student}
        NewState[e.target.Rollno]=e.target.value
        this.setState({Student:NewState})
    }
    changeButton=()=>{
        console.log(this.state.Student)
    }

  render() {
    return (
      <div>
          <label htmlFor="">Roolno</label>
          <input type="text" Roll no="Roll no" value={this.state.Rollno} onChange={this.ChaengeElmet}/> <br />

          <label htmlFor="">Attendence</label>
          <input type="text" Roll no="Attendence" value={this.state.Attendence} onChange={this.ChaengeElmet}/> <br />

          <label htmlFor="">Mark</label>
          <input type="text" Roll no="Mark" value={this.state.Mark} onChange={this.ChaengeElmet}/> <br />

          <label htmlFor="">Holiday</label>
          <input type="text" Roll no="Holiday" value={this.state.Holiday} onChange={this.ChaengeElmet}/> <br />


          <button onClick={this.changeButton}>Click</button>
      </div>
    )
  }
}
