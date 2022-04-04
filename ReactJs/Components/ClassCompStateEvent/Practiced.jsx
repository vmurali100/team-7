import React, { Component } from 'react'

export class CcompEvent1 extends Component {
  constructor() {
    super()
    this.state = {
      Indias: "",
      StatesandCapitas: {},
      StatesinIndia: []
    }
  }
  Showmsg = () => {
    let newState = { ...this.state }
    newState.Indias = "Indias captal is New-Delhi"
    this.setState(newState)
  }
  ShowObj = () => {
    let newState = { ...this.state }
    newState.StatesandCapitas = {
      Andra: "Amaravathi",
      TamilNadu: "Chennei",
      Karnataka: "Bengalore",
      Telangana: "Hydarabad",
      Kerala: "Thiruvananthapura"
    }
    this.setState(newState)
  }
  showAry= ()=>{
    let newState={ ...this.state}
    newState.StatesinIndia=["Sadik", "Surya", "Thala deena", "Rehaman", "Raju"]
    this.setState(newState)
  }

  render() {
    let { StatesandCapitas,StatesinIndia } = this.state

    return (
      <div>
        <button onClick={this.Showmsg}> Onclick</button>
        <h1> Indias capital is : {this.state.Indias} </h1>

        <button onClick={this.ShowObj}> ShowObj</button>
        {Object.values(StatesandCapitas).map((jrj) => {
          return <li >{jrj}</li>
        })}

        <hr />
        <button onClick={this.showAry}>Show Arrey</button>
        <ul>
          {StatesinIndia.map((rrr, i) => {
            return <li key={i}>{rrr}</li>
          })}
        </ul>

      </div>
    )
  }
}

