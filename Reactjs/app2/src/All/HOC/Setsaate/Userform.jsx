import {component} from 'react'
export default class Userform extends component{
  constructor(){
      super()
      this.state={
       person:{
        fname:"",
        lname:""
       }
    }
  }
  handlechange=(e)=>{
    let newperson={...this.state.person}
    newperson[e.target.name]=e.target.value
    this.setstate({fname:value})
  }
  render(){
    return <>
         <label htmlFor="fname">First Name</label>
         <input type="text" name='fname' value={this.state.fname}onChange={(e)=>{this.handlechange(e)}}/> <br/>

         <label htmlFor="lname">Last Name</label>
         <input type="text" name='lname' value={this.state.lname}onChange={(e)=>{this.handlechange(e)}}/>  <br />

        <button>Userform</button> 
    </>
  }
}