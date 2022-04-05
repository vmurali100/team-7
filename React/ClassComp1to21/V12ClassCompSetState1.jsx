import React, { Component } from "react";

export default class Welcome extends Component{
    render(){
        return (
            <h2>Welcome {this.props.Name} to React JS{this.props.sName}</h2>
        )
    }
}

// import React from "react";

// const HeroenName = props => {
//     const {Name, HeroName} = props
//     return (
//         <div>
//             <h2>Rani{Name}...
//              Anupama Parameswaran{HeroName}</h2>
//         </div>
//     )
// }
// export default HeroenName

