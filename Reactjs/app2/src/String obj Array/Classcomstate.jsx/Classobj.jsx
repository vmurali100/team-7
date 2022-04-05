import {component} from 'react'
export default class Classobj extends component{
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
        return <>
        <ul>
            <li>{this.state.person.Happy}</li>
            <li>{this.state.person.Sad}</li>
        </ul>
        </>
    }
}