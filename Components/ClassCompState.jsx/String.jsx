import React, { Component } from 'react'

export default class String extends Component {
    constructor(){
        super()
        this.College={
            message:"Hi How Are You...."
        }
    }
    render() {
    return <h1>{this.College.message}</h1>
  }
}
