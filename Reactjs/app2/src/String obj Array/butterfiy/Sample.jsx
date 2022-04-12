import { Component } from "react";


export default class Sample extends Component{
    constructor(props){
        console.log("component constructor cycle")
        super(props)
    }
    componentWillMount(){
        console.log("componentWillMount cycle")
    }
    render(){
        console.log("component render cycle")
        return <h2>{this.props.myname}</h2>
        
        
    }
    componentDidMount(){
        console.log("componentDidMount cycle")
    }
}