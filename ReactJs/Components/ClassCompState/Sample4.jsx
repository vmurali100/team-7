import React, { Component } from 'react'

export default class Sample4 extends Component {
    constructor(){
        super()
        this.myCars={
             Brand:"Maruthi Suziki",
            Model:{
                model1:"Baleno",
                Model2:"Swift",
                model3:"Wagon R",
                model4:"Vtara Brezza",
                model5:"Ertiga"
               
            },
            NewModel:[ "Jimmy","S_crose","Vitara"]
        }
    }
  render() {
      let{Model,NewModel}=this.myCars
    return (
      <div>
          <h1> {this.myCars.Brand}</h1>
          { Object.values(Model).map((don,i)=>{
              return<li key={i} >{don}</li>
          })}

          <ul>
              {NewModel.map((info)=>{
                  return <li>{info}</li>
              })}
          </ul>
      </div>
    )
  }
}
