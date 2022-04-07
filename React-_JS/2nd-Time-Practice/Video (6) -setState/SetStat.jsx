import React, { Component } from 'react'

export default class Sitha extends Component {
    constructor() {
        super()
        this.state={
              message:"Hello Welcom"
        }
    }
    changeing(){
        this.setState({
            message:"ok Thank u bye"
        })
    }

    render() {
        return (
            <div>
                <h1>This Message will Changed then Rendering</h1>
                <button onClick={this.changeing}>Click</button>
            </div>
        )
    }
}
