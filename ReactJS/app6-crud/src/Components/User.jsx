import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        username: "",
      },
    };
  }

  handleChange=(e)=>{
      let newUser = {...this.state.user};
      newUser[e.target.name] = e.target.value
      this.setState({user:newUser})
  }

  handleSubmit=()=>{
      console.log(this.state.user)
  }
  render() {
    return (    
      <div>
        <h2>Welcome to CRUD Application </h2>

        <hr />

        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.user.email}
                    onChange={(e)=>{this.handleChange(e)}}
                  />
                 
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.user.username}
                    onChange={(e)=>{this.handleChange(e)}}

                  />
                </div>

                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
