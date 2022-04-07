import React, { Component } from 'react'

export default class Ranga extends Component {
    constructor(){
        super()
        this.state={
            person:{
                fname:'Hello gurriju',
                lname:'how are you',
                age:'23',
                city:'america'
            }
        }
    }
  render() {
      let{fname,lname,age,city}=this.state.person
    return (
      <div>
           <h3>{fname}</h3>
           <h3>{lname}</h3>
           <h3>{age}</h3>
           <h3>{city}</h3>
      </div>
    )
  }
}
