import React, { Component } from 'react'
import EXM1 from './EXM1'
import EXM2 from './EXM2'

export default class LifeCycle2 extends Component {
    constructor(props) {
        console.log(' component Constructor Cycle')
        super(props)
    }

    componentWillMount() {
        console.log('component WillMount Cycle')
    }

    // 2.Updating
    shouldComponentUpdate() {
        console.log('shouldComponent Update Cycle')
    return true
    }
    componentDidCatch() {
        console.log('component DidCatch Cycle')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }


    componentDidMount() {
        console.log(' component DidMount Cycle')
    }
    render() {
        console.log('component Render Cycle')
        return (
            <div>
                {this.props.FruitName == "" ? <EXM1 /> : <EXM2 FruitName={this.props.FruitName} />}

            </div>
        )
    }
}
