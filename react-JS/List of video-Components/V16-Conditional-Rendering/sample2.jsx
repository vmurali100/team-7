import React, { Component } from 'react'

export default class Moon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LoggedIn: true

        }
    }
    render() {
        return this.state.LoggedIn && <div>Comeing</div>
        // type=3
        // return this.state.LoggedIn?(
        //     <div>Comeing</div>
        // ) : (
        //    <div>Going</div> )
       
        // type=2
        // let message
        // if(this.state.LoggedIn){
        // message = <div>Comeing</div>
        // }else{
        // message = <div>Going</div>
        // }
        // return <div>{message}</div>

        // // type=1

        // if (this.state.LoggedIn) {
        //  return <div>Comening</div>
        // }else {
        //  return <div>Going</div>
        // }

    }
}
