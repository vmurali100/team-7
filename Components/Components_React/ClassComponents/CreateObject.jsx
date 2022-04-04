import React, { Component } from 'react'

export default class Content extends Component {
    constructor(){
        super()
        this.state={
            MyFriends:["Raju","Deena","Rehaman","sadik","Balaji","Rahul","Kunal","Surya"]
        }
    }
  render() {
    return (
      <div>
          <ul>
              <li>{this.state.MyFriends}</li>
          </ul>
      </div>
    )
  }
}
