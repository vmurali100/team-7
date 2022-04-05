import React, { Component } from "react";
import { Clacom } from "./Clacom";
import { Double } from "./Clacom";
import { Cons } from "./Clacom";
  
// class component is taken only one component 

// only one h1 or p is writen below model 
class Wellcome extends Component {
    render(){
        return <div>
            <h1>Class Component</h1>
            <Clacom/>
            < Double/> 
            <Cons/>
        </div>
    }
}
export default Wellcome

//  export default class Wellcome extends Component {
//     render(){
//         return <h1>Class Component</h1>
//     }
// }

// two h1 or h2 or 2 p is writen in the method below type is using div

// export default class Wellcome extends Component {
//          render(){
//              return <div>
//                  <h1>Class Component</h1>
//                  <h2>Hello</h2>
//              </div>
//          }
//      }