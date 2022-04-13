import React, { Component } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

export default class Demo extends Component {

    // 1.This is  constructor Component Cycle :-
    constructor(props) {
        super(props)

    }

    // 2.This is Mounting Phase Component Cycle :-
    componentDidMount(){
        console.log("componentdidmount life cycle");
       return <p>MOST OF Componentdidmount</p>
    }
    // 3.This is Update Phase Component Cycle :-
    componentWillUnmount(){
        console.log("componentwillunmount life cycle");
        return <i>MOST OF ComponentWillunmount</i>
    }
    // 4. This is UnMOUTING Phase Component Cycle :-
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate life cycle");
        // return <h6>MOST OF shouldComponentUpdate</h6>
        return false
        // if(this.props.Name == "Surya Prakash"){
        //     return false
        // }else{
        //     return true
        // }
       
    }
    componentDidCatch(){
        console.log("componentdidCatch life cycle");
        return <h5>MOST OF ComponentdidCatch</h5>
    }
    componentDidUpdate(){
        console.log("componentdidupdate life cycle");
        return <b>MOST OF Componentdidupdate</b>
    }

    // 5.This is Render Component Cycle :-
    render() {
        return (
            <div>
                {/* <h1>My Goal Is Sucess to Reach An Ever</h1>
                <h1>{this.props.Name}</h1> */}

                {this.props.Name == "" ? <Child1/>:<Child2  Name={this.props.Name}/>}
               
            </div>
        )
    }
}
