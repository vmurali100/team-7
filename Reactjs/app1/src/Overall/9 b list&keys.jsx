import {component} from 'react'
export default class Classarray extends component{
    constructor(){
        super()
        this.state={
            Snaks:["Choki","Lays","Boonda","Vadai"]
        }
    }
    render(){
        let{Snaks}=this.state
        return <>
        <ul>
           {Snaks.map((frd,i)=>{
               return<li key={i}>{frd}</li>
           })}
        </ul>
        </>
    }
}