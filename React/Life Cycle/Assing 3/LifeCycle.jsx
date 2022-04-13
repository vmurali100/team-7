import React, { Component } from 'react'
import Sample1 from './Sample1'
import Sample2 from './Sample2'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log("Component Will Mount Life Cycle")
    }
    shouldComponentUpdate(){
        console.log("Should Component Update Life Cycle")
        return true
    }
    componentDidUpdate(){
        console.log("Component Did Update Life Cycle")
    }
    componentDidCatch(){
        console.log("Component Did Catch Life Cycle")
    }
    render() {
        console.log("Component Render Life cycle")
        return (
            <div>
                {this.props.Fruit == "" ? <Sample1/> : <Sample2 Fruit={this.props.Fruit}/>}
            </div>
        )
    }
    componentDidMount() {
        console.log("Component did Mount Life Cycle")
    }
}
