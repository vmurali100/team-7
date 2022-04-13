import React, { Component } from 'react'
import Sample2 from './Sample2'
import Sample1 from './SAmple1'

export default class LifeCycle4 extends Component {
    constructor(props) {
        console.log("Constructor Cycle")
        super(props)
    }
    componentWillMount() {
        console.log("Component Will Mount Life Cycle")
    }
    shouldComponentUpdate() {
        console.log("Should Component Update Life Cycle")
        return true
    }
    componentDidUpdate() {
        console.log("Component Did Update Life Cycle")
    }
    componentDidCatch() {
        console.log("Component Did Catch Life Cycle")
    }
    render() {
        console.log("Component Render Cycle")
        return (
            <div>
                <Sample1/>
                <Sample2/>
            </div>
        )
    }
}
