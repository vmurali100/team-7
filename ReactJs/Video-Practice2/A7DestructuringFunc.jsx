import React from "react";
// const DataUser=({thala,thalapathy})=>{
// return(
//     <div>
//         <h1> Thala Nameis :-{thala}Thalapathy name is:-{thalapathy}</h1>
//     </div>
// )
// }
const DataUser=props=>{
    const{thala,thalapathy}=props
    return(
        <div>
            <h1> Thala Nameis :-{props.thala}Thalapathy name is:-{props.thalapathy}</h1>
        </div>
    )
    }
export default DataUser