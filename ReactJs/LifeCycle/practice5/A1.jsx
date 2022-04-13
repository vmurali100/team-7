import { Component } from "react";

export class A1 extends Component{
    render(){
        return <h1>Andrapradesh capital is :</h1>
    }
    componentWillUnmount(){
        console.log('component WillUnmount will removed')
    }
}
