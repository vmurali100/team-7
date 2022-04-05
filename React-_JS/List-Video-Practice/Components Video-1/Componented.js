import React, { Component } from 'react'

function activate(){
   return(
       <div className='Container'>
           <h1>React Js</h1>
           <b>Components -1).Funtional Component-Stateless Component 2).Class Component -Stateful Component</b>
       </div>
   ); 
}
export default activate;


export class Guru extends Component{
    render(){
        return(
            <div className='Parent'>
                <h2>Hello welcome To React with Javascript</h2>
                <p>It in Class Method We will Use as Render() method</p>
            </div>            
        );
    }
}