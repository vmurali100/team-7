import { Component } from "react";

export default class Object extends Component{
    constructor(){
        super()
        this.state={
            student:{
                fname: "sadik",
                lanme: "sk",
                standard: 7,
                subject: "hindi",
                marks : 100
            
        }
    }
}
     render(){
        let {fname, lanme, standard, subject, marks} = this.state.student 
        return(
            <div>
                <h1>Fname : {fname}</h1>
                <h1>Lname : {lanme}</h1>
                <h1>Class : {standard}</h1>
                <h1>Subject : {subject}</h1>
                <h1>Marks : {marks}</h1>
            </div>
        )
    }
}
