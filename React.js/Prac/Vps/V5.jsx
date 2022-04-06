import React from "react";

// const V5 = ({teacher, subjectName})=>{


const V5 = props =>{
    const {teacher,subjectName}= props


    return(
        <div>
            <h1>Hello {teacher} which topic today {subjectName}</h1>
        </div>
    )
}
export default V5 

