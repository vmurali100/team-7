import React, { Component } from "react";

export class Babu extends Component {
    constructor() {
        super()
        this.state = {
            informations: true
        }
    }



    render() {
        //    Method-1
        // if (this.state.informations) {
        //     return <h1>Heello iam from Chittoor</h1>
        // } else {
        //     return <h3>hello guru</h3>
        // }
        //  return(
        //      <div>

        //      </div>
        //  );

        // Method-2
        // let data
        // if (this.state.informations) {
        //     data= <h1>Heello iam from Chittoor</h1>
        // } else {
        //     data= <h3>hello guru</h3>
        // }
        // return <div>{data}</div>

        // Method-3
        // return this.state.informations ?(
        //     <div>Hello iam from Chittoor</div>
        // ):(
        //     <div>Hello guru</div>
        // )

        // Method-4 
        return this.state.informations && <div>Hello iam from Chittoor</div>
    }

}