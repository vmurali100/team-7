import React, { Component } from 'react'

export class ChildCopm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div style={{color:'blue'}}>
            <h1>Name:-{this.props.Data.Name}</h1>
            <h1>City:-{this.props.Data.City}</h1>
            <h1>Email:-{this.props.Data.Email}</h1>
            <h1>Phone:-{this.props.Data.Phone}</h1>
            <h1>Gender:-{this.props.Data.Gender}</h1>
        </div>

    }
}
