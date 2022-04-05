import {component} from 'react'
export default class Classobj1 extends component{
    constructor(){
        super()
        this.state={
            person:{
                Happy:'Be happy',
                Sad:'Be sad'
            }
        }
    }
    render(){
        // taking object properties with destructure method 
        let{Happy,Sad}=this.state.person
        return <>
        <ul>
            <li>{Happy}</li>
            <li>{Sad}</li>
        </ul>
        </>
    }
}