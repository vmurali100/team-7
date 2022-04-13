import { Component } from "react";

import Laddu from "./Stage1";
import Suceessful from "./Stage2";


export default class Mycomp extends Component{

    constructor(props){
          console.log("component constructor cycle")
          super(props)
    }


    
    // MOUNTING Phase :-  
    ComponentWillMount(){
        console.log(" this type is componentWillMount cycle")
    }


    // UPDATEING Phase :-
    ShouldComponentUpdate(){
        console.log(" this type is shouldComponentUpdate cycle")
        return true
    }

    ComponentDidCatch(){
        console.log(" this type is componentDidCatch cycle")
    }
    ComponentDidUpdate(){
        console.log(" this type is componentDidUpdate cycle")
    }


    // UNMOUNTING Phase :- 
    render(){
        console.log(" this type is component render cycle")

        return(
            <div>
                {this.props.christmas == "" ? <Suceessful/> : <Laddu christmas={this.props.christmas}/>}
            </div>
        )
        
    }
    ComponentDidMount(){
        console.log(" this type is componentDidMount cycle")
    }
}