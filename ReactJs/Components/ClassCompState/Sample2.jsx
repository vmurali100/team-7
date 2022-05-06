import React, { Component } from 'react'

export default class Sample2 extends Component {
    constructor(){
        super()

        this. Institute={
            PersonString:"Hello Sir, We are Team7 Team members ",
            CourseNames:{
                    a:"Html5",
                    b:"Css3",
                    c:"Javascript",
                    d:"ReactJs"
            },
            Students:["Sadik","Surya","Thala deena","Rehaman","Raju"]
        }
    }
  render() {
      let{ CourseNames,Students}= this.Institute
    return (
      <div>
          <h1>{this.Institute.PersonString}</h1>

          { Object.values(CourseNames).map((pept,i)=>{
                return <li key={i}>{pept}</li>
          })}

         <ul>
         { Students.map((Apple,i)=>{
             return <li key={i}>{Apple}</li>
          })}
         </ul>

      </div>
    )
  }
}
