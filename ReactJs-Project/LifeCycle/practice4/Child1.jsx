import { Component } from "react";

export class  ChildNew extends Component{
    render( ){
        return <h1>Tell the Car Name</h1>
    }
    componentWillUnmount(){
        console.log('componentWillUnmount will removed')
    }
}
