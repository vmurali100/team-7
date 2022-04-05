import React, { Component } from 'react'

export default function Data(){
    return(
        <div className='main'>
          <h3>Funtional Component In JSX file -Javascript XML</h3>
          <i>In this JSX,file can be simplify the code in Html code will also be allowed in this JSX for Example-</i>
          <b>Any of HTML code is be allowed as Javascript</b>
        </div>
    );
}

export class hello extends Component{
    render(){
        return(
            <div>
                <h4>Iam From Class Component from JSX file component</h4>
                <p>Welocome to React Js-JAVASCRIPT</p>
            </div>
        
        );
    }
}