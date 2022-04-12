import React, { Component } from 'react'

export default class Feel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Submit: true

        }
    }
    render() {
        return this.state.Submit && <div>Yes</div>
        // 3
        // return this.state.Submit?(
        //     <div>Yes</div>
        // ) : (
        //    <div>No</div> )
       
        // 2
        // let message
        // if(this.state.Submit){
        // message = <div>Yes</div>
        // }else{
        // message = <div>No</div>
        // }
        // return <div>{message}</div>

        // // 1

        // if (this.state.Submit) {
        //  return <div>Yes</div>
        // }else {
        //  return <div>No</div>
        // }

    }
}
