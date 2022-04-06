import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LoggedIn: false
        }
    }
    render() {
      return  this.state.LoggedIn && <div>welcome Raju</div>
    
    
    // type-3
        // return this.state.LoggedIn ? (
        //     <div>welcome Raju</div>
        // ) : (
        //     <div>welcome Deena</div>
        // )}
    // type-2
    //     let message
    //     if(this.state.LoggedIn){
    //         message=<div>welcome Raju</div>
    //     }else{
    //         message=<div>welcome Deena</div>
    //     }
    //     return <div>{message}</div>
     
    // type-1
    //     if (this.state.LoggedIn) {
    //         return <div>welcome Raju</div>
    //     }
    //     else {
    //         return <div>welcome Deena</div>
    //     }
    }
 }
