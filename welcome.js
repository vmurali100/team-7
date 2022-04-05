import React, {Component} from "react";
class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>Welcome here{this.props.name}</h1>
                <h1>{this.props.superhero}</h1>
            </div>
        )
    }
}
export default Welcome;