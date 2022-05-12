import React, { Component } from 'react'

export default class Sample5 extends Component {
    constructor(){
        super()
        this.state={
             message:"Hello Dear Team members",
            Person:{
                fname:"Raju",
                lname:"Bhai",
                Email:"rajubhai@gmail.com",
                password:"123456",
                number:"2233445566"
               
            },
            smates:[ "Sadik","Rehaman","Deena"]
        }
    }
  render() {
      let{Person,smates}=this.state
    return (
      <div>
          <h1> {this.state.message}</h1>
          { Object.values(Person).map((User,i)=>{
              return<li key={i} >{User}</li>
          })}

          <ul>
              {smates.map((info)=>{
                  return <li>{info}</li>
              })}
          </ul>
      </div>
    )
  }
}
