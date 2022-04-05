import { Component } from "react";

export class Moon extends Component{
    render(props){
        return(
            <div >
                
                 <h1>Raju Deena Rehaman Balaji{props.name}{props.age}</h1>
                 {/* {props. DeenaComponent}
                 {props.RajuDeatails} */}
            </div>
           
        )
        
    }
}