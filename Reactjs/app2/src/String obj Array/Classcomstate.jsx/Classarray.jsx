import {component} from 'react'
export default class Classarray extends component{
    constructor(){
        super()
        this.state={
            Friends:["vijay","ajith","surya","rajini"]
        }
    }
    render(){
        let{Friends}=this.state
        return <>
        <ul>
           {Friends.map((frd,i)=>{
               return<li key={i}>{frd}</li>
           })}
        </ul>
        </>
    }
}