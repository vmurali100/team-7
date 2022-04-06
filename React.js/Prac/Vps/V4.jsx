import React from "react";

// const V4 = ({student, schoolName})=>{


const V4 = props =>{
    const {student,schoolName}= props


    return(
        <div>
            <h1>Hello {student} which standard ur {schoolName}</h1>
        </div>
    )
}
export default V4 

