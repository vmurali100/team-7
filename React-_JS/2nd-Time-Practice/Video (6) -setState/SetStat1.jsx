import React, { Component } from 'react'

export default class Rama extends Component {
    constructor() {
        super()
        this.state={
              info:{
                  name:"Surya",
                  age:"23",
                  city:"chittoor"
              }  
        } 
    }
    chaged(){
        this.setState({
            info:{
                name:"raju",
                age:"22",
                city:"American"
            }
        })
    }

    render() {
        return (
            <div>
               <b>my Object values be onclick then change</b>
               <button onClick={this.chaged}>chaged</button>
            </div>
        )
    }
}
