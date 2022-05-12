import React from "react";
const StudentData=(props)=>{
const{Stdname,Rollnumber}=props

return (
    <div>
    <h1>{props.Stdname} {props.Rollnumber}</h1>
</div>
)
}
export default StudentData
