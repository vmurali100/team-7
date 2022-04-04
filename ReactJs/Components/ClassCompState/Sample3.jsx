import React, { Component } from 'react'

export default class Sample3 extends Component {
    constructor(){
        super()
        this.Cricket={
             Management:"Bcci",
            Players:{
                a1:"ViratKholi",
                a2:"Dhoni",
                a3:"Sachin Tendulkar",
                a4:"Raina",
                a5:"Ishan Kishan",
                a6:"Surya Kumar Yadv",
                a7:"Hardik Pandiay",
                a8:"Rohit Sharma",
                a9:"Gambeer",
                a10:"Yuvaraj Singh",
                a11:"Jedeja"
            },
            Bowlers:[ "Jasprit Bumrah","Aswin","Chahal","Sammi"]
        }
    }
  render() {
      let{Players,Bowlers}=this.Cricket
    return (
      <div>
          <h1> Indian Cricket Team Management:{this.Cricket.Management}</h1>
          { Object.values(Players).map((rose,i)=>{
              return<li key={i} >{rose}</li>
          })}

          <ul>
              {Bowlers.map((Red)=>{
                  return <li>{Red}</li>
              })}
          </ul>
      </div>
    )
  }
}
