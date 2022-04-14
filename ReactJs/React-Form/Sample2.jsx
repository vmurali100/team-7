import React, { Component } from 'react'

export default class Sample2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserForm:{
            FirstName:"",
            Email:"",
            file:"",
            LastName:"",
            Password:"",
            

             

         }
      }
    }
    ChengeEvent=(e)=>{
        const newState={...this.state.UserForm}
        newState[e.target.name]=e.target.value
        this.setState({UserForm:newState})

    }
    Submitbtn=()=>{
        console.log(this.state.UserForm)
    }
    render() {
        return (
            <div className='Parent'>
                <div className="Child">
                    <div class="container">
                        <h2>Form Validation</h2>
                        <hr />
                        <div class="row">
                            <div class="col">

                                <form>
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">FirstName</label>
                                        <input type="email" class="form-control"  name='FirstName' value={this.state.UserForm.FirstName} onChange={(e)=>{this.ChengeEvent(e)}} placeholder='Frisr Name' />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                        <input type="password" className="form-control" name='Email' value={this.state.UserForm.Email} onChange={(e)=>{this.ChengeEvent(e)}} placeholder='Email' />
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                        <input type="password" className="form-control" name='City' value={this.state.UserForm.City} onChange={(e)=>{this.ChengeEvent(e)}} placeholder='City' />
                                    </div>

                                    <div className="mb-3 form-check">
                                       <input type="file" name="file" value={this.state.UserForm.file} onChange={(e)=>{this.ChengeEvent(e)}} id="" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="radio" className="raju"  />Toggle this custom radio
                                    </div>
                                </form>
                            </div>
                            <div class="col">
                                <form>
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">LastName</label>
                                        <input type="email" className="form-control" name="LastName" value={this.state.UserForm.LastName} onChange={(e)=>{this.ChengeEvent(e)}} placeholder='Last Nane' />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control"  name="Password" value={this.state.UserForm.Password} onChange={(e)=>{this.ChengeEvent(e)}}  placeholder='Password' />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Select any value</label><br />
                                        <select name="" id="">Select any value
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <input type="checkbox" name=""  />Check this custom checkbox
                                    </div>
                                    
                                    <div class="mb-3 form-check">
                                       <input type="radio" name="raju"  /> Or toggle other custum radio
                                    </div>
                                </form>
                            </div>
                            <br />
                            <hr />
                            <button type="submit"  onClick={this.Submitbtn} className="btn btn-primary">Submit</button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
