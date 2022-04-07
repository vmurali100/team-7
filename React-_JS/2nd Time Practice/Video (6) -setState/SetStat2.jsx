import React, { Component } from 'react'

export default class Laxman extends Component {
    constructor() {
        super()
        this.state={
            tools:["scrudriver","Cuttingplayer"]
        }
    }
    takeit(){
        this.setState({
            tools:['spender','tester']
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.takeit}>Submitt</button>
            </div>
        )
    }
}
