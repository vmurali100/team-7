import React, { Component } from 'react'
import Hii from './Hii'
import Rehaman from './Rehaman'

export default class LifeCycleA extends Component {
    constructor(props) {
        console.log("Constructor Component")
        super(props)
    }
    // 1.Component Mounting Phase
    componentWillMount() {
        console.log("Component Will Mount Life Cycle")
    }
    //2.Component Updating Phase
    shouldComponentUpdate(){
        console.log("Should Component Update Life Cycle")
        return true
        // if(this.props.Name == "Sayed Rehaman"){
        //     return false
        // }else{
        //     return true
        // }        
    }
    componentDidCatch(){
        console.log("ComponentDid Catch Life Cycle")
    }
    componentDidUpdate(){
        console.log("Component Did Upadate Life Cycle")
    }

    render() {
        console.log("Component Render Life Cycle")
        return (
            <div>
                {this.props.Name == "" ? <Hii/> : <Rehaman Name={this.props.Name}/>}                
            </div>
        )
    }
    componentDidMount() {
        console.log("Component Did Mount Life Cycle")
    }
}
