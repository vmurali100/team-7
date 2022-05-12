import React, { Component } from 'react'

export default class Sample1 extends Component {
  render() {
    return (
      <div className='Parent'>
        <b>Register your account</b>
        <div className='Child'>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name </label>
              <input type="email" class="form-control"  placeholder='Enter your full Name'/>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Username</label>
              <input type="password" class="form-control" placeholder='Enter a Username'/>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" placeholder='Enter your Email address... ' />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" placeholder='Enter your password...' />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
              <input type="password" class="form-control" placeholder='Enter your password again...' />
            </div>

            <button type="submit" class="btn btn-primary">Sign up</button> 
            <p>Already have an account? <a href="">Sign in</a></p>

          </form>

        </div>
      </div>
    )
  }
}
