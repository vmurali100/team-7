import React, { Component } from "react";

export default class Suri extends Component{
    render(){
        return (
            <h2>Welcome {this.props.Name} to New-Course{this.props.sName}</h2>
        )
    }
}

// import React from "react";

// const PersonName = props => {
//     const {Name, HeroName} = props
//     return (
//         <div>
//             <h2>Player{Name}...
//              Dhoni{HeroName}</h2>
//         </div>
//     )
// }
// export default PersonName