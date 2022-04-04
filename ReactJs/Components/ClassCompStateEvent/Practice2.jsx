import React, { Component } from 'react'

export  class Practice2 extends Component {
  constructor() {
    super()

    this.state = {
      PersonString: "Hello Sir, We are Team7 Team members ",

      CourseNames: {
        a: "Html5",
        b: "Css3",
        c: "Javascript",
        d: "ReactJs"
      },
      
      Students: ["Sadik", "Surya", "Thala deena", "Rehaman", "Raju"]
    }
  }

  Insring=()=>{
      let newState={...this.state}
      newState.PersonString="Iam  not a team7 team member "
      this.setState(newState)
  }
  ShowObj=()=>{
      let newState={...this.state}
      newState.CourseNames={
        Andra:"Amaravathi",
        TamilNadu:"Chennei",
        Karnataka:"Bengalore",
        Telangana:"Hydarabad",
        Kerala:"Thiruvananthapura"
      }
      this.setState(newState)
  }

  showArey=()=>{
      let newState={...this.state}
      newState.Students=["Mahasarta","Madyapradesh","Panjab","UttarKhand"]
      this.setState(newState)
  }
  render() {
    let { CourseNames, Students } = this.state
    return (
      <div>
          <button onClick={this.Insring}>String</button>
        <h1>{this.state.PersonString}</h1>

        <button onClick={ this.ShowObj}>ShowString</button>
        {Object.values(CourseNames).map((pept, i) => {
          return <li key={i}>{pept}</li>
        })}

        <button onClick={this.showArey}>ShowArrey</button>
        <ul>
          {Students.map((Apple, i) => {
            return <li key={i}>{Apple}</li>
          })}
        </ul>

      </div>
    )
  }
}