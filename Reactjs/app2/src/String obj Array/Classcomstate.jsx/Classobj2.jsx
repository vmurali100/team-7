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
        // In reactjs obj is directly not display, so obj convert to array 
       let{person}=this.state
        return <>
         <ul>
             {Object.values(person).map((val,i)=>{
                return <li key={i}>{val}</li>
             })}
         </ul>
        </>
    }
}