import {component} from 'react'
export default class Classstring extends component{
    constructor(){
        super()
        this.state={
            Inform:"Today is holiday"
        }
    }
    render(){
        return <h3>{this.state.Inform}</h3>
    }
}