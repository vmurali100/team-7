import React, { Component } from 'react'

export default class Sample1 extends Component {
 constructor() {
   super()
 
   this.state = {
            User:{
                Name:"",
                UserName:"",
                EmailAddress:"",
                Password:"",
                ConfirmPassword:"",
            },
   };
 }
 handleChange=(e)=>{
     let newUser = {...this.state.User};
     newUser[e.target.name]=e.target.value
     this.setState({user:newUser})
 }
 handleSubmit=()=>{
     console.log(this.state.User)
 }
    render() {
    return (
      <div style={{'background-color':'blue','width':'400px','height':'600px','position':'relative','right':'-600px'}} className='parent'>
          <h2 style={{'position':'relative','right':'-80px','color':'white','top':'10px'}}>Register your account</h2>
          <div style={{'background-color':'white','width':'252px','height':'520px','position':'relative','right':'-70px',}} className='Child'>
                      <form>
                          
                          <div style={{position:'relative','right':'-40px'}} className='mb-3'><br />
                            <label htmlFor="ExampleName" className='Form-label'>Name</label><br /><br />
                            <input type="text" className='form-control'name='Name'  value={this.state.User.Name}onChange={(e)=>{this.handleChange(e)}} placeholder='Enter your full name...' />
                          </div>

                          <div style={{position:'relative','right':'-40px'}} className='mb-3'><br />
                            <label htmlFor="ExampleUsername" className='Form-label'>Username</label><br /><br />
                            <input type="text" className='form-control'name='Username'value={this.state.User.Username}onChange={(e)=>{this.handleChange(e)}} placeholder = 'Enter a username...'  />
                          </div> 

                          <div style={{position:'relative','right':'-40px'}} className='mb-3'><br />
                            <label htmlFor="ExampleEmail" className='Form-label'>Email address</label><br /><br />
                            <input type="text" className='form-control'name='Email'value={this.state.User.EmailAddress}onChange={(e)=>{this.handleChange(e)}} placeholder ='Enter your email address...' />
                          </div>

                          <div style={{position:'relative','right':'-40px'}} className='mb-3'><br />
                            <label htmlFor="ExampleName" className='Form-label'>Password</label><br /><br />
                            <input type="number" className='form-control'name='Password'value={this.state.User.Password}onChange={(e)=>{this.handleChange(e)}} placeholder='Enter your password...' />
                          </div>

                          <div style={{position:'relative','right':'-40px'}} className='mb-3'><br />
                            <label htmlFor="ExampleName" className='Form-label'>Confirm Password</label><br /><br />
                            <input type="number" className='form-control'name='ConfirmPassword'value={this.state.User.ConfirmPassword}onChange={(e)=>{this.handleChange(e)}} placeholder='Enter your password again...' />
                          </div>
                          
                          <button style={{position:'relative','right':'-30px','top':'40px','width':'200px','backgroundColor':'green'}} type='Sign up'class='btn btn-primary'>Sign up</button>
                          <p style={{position:'relative','right':'-30px','top':'40px'}}>Already have an account? <a href="">Sign in</a></p>
                      </form>
                  
                      </div>
          <hr />
   </div>
    )
  }
}
