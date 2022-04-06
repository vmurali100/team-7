import React, { Component } from 'react'
class Welcome extends Component {
    render() {
            const { Fname, Lname } = this.props
        //  const {state1,state2}= this.state
        return (
            <h1>
                Welcome {Fname} And {Lname} 
               
            </h1>
        )
    }
}

export default Welcome