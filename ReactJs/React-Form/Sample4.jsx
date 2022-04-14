import React, { Component } from 'react'

export default class Sample4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:{
             Nmae:"",
             Username:"",
             Email:"",
             Password:"",
             ConfirmPassword:"",
             Message:""
         }
      }
    }
    HandlerChange=(e)=>{
        const newState={... this.state.user}
        newState[e.target.name]=e.target.value
        this.setState({user:newState})
    }
    clickbutton=()=>{
        console.log(this.state.user)
    }
    render() {
        return (
            <div className='parent'>
                <h1>Bootstrap 4 Form Validation Demo</h1>
                <hr />
                <div className="child">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control"  name='Name' value={this.state.user.Name} onChange={(e)=>{this.HandlerChange(e)}} placeholder='Name' />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                            <input type="password" className="form-control" name='Username'value={this.state.user.Username} onChange={(e)=>{this.HandlerChange(e)}}  placeholder='Username' />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" name='Email' value={this.state.user.Email}  onChange={(e)=>{this.HandlerChange(e)}} placeholder='Email'/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='Password' value={this.state.user.Password} onChange={(e)=>{this.HandlerChange(e)}} placeholder='Password'/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">ConfirmPassword</label>
                            <input type="email" className="form-control" name='ConfirmPassword' value={this.state.user.ConfirmPassword} onChange={(e)=>{this.HandlerChange(e)}} placeholder='Confirm'/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Message</label> <br />
                            <textarea name="Message" value={this.state.user.Message}  onChange={(e)=>{this.HandlerChange(e)}} cols="105" rows="4"  ></textarea>
                        </div>
                       

                        <button type="submit" onClick={this.clickbutton} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
