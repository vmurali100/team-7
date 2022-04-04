import { Component } from "react";

export class Done extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                 <h1>Bikename : {this.props.Data.Bikename}</h1>
                <h1>Sitting : {this.props.Data.Sitting}</h1>
                <h1>Color : {this.props.Data.Color}</h1>
                <h1>Model : {this.props.Data.Model}</h1>
                <h1>Speed : {this.props.Data.Speed}</h1>
                <h1>Price : {this.props.Data.Price}</h1>
            </div>
        )
    }
}