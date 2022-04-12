import { Component } from "react";

export default class Hello extends Component{
    render(){
        return<> Welcome </>
        
    }
    componentWillUnmount(){
        console.log("componentWillUnmount ")
    }
}