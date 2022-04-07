import React, { Component } from 'react'

export default class Arjun extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Happy:{
             Love:'',
             Careing:'',
             Sad:'',
             Help:''
         }
      }
    }
    changed=(e)=>{
        let NewState={...this.state.Happy}
        NewState[e.target.Rollno]=e.target.value
        this.setState({Happy:NewState})
    }
    changing=()=>{
        console.log(this.state.Happy)
    }

  render() {
    return (
      <div>
          <label htmlFor="">Roolno</label>
          <input type="text" Roll no="Roll no" value={this.state.Rollno} onChange={this.changed}/> <br />

          <label htmlFor="">Attendence</label>
          <input type="text" Roll no="Attendence" value={this.state.Attendence} onChange={this.changed}/> <br />

          <label htmlFor="">Mark</label>
          <input type="text" Roll no="Mark" value={this.state.Mark} onChange={this.changed}/> <br />

          <label htmlFor="">Holiday</label>
          <input type="text" Roll no="Holiday" value={this.state.Holiday} onChange={this.changed}/> <br />


          <button onClick={this.changing}>Click</button>
      </div>
    )
  }
}
