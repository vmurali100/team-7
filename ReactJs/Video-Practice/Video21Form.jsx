import React, { Component } from 'react'

export default class Video21Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Movies:{
             name:'',
             heroname:'',
             realise:'',
             budjet:''
         }
      }
    }
    ChaengeElmet=(e)=>{
        let NewState={...this.state.Movies}
        NewState[e.target.name]=e.target.value
        this.setState({Movies:NewState})
    }
    changeButton=()=>{
        console.log(this.state.Movies)
    }

  render() {
    return (
      <div>
          <label htmlFor="">Movie Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.ChaengeElmet}/> <br />

          <label htmlFor="">Hero</label>
          <input type="text" name="heroname" value={this.state.heroname} onChange={this.ChaengeElmet}/> <br />

          <label htmlFor="">Realise Date</label>
          <input type="text" name="realise" value={this.state.realise} onChange={this.ChaengeElmet}/> <br />

          <label htmlFor="">Total budjet</label>
          <input type="text" name="budjet" value={this.state.budjet} onChange={this.ChaengeElmet}/> <br />
          <button onClick={this.changeButton}>Click</button>
      </div>
    )
  }
}
