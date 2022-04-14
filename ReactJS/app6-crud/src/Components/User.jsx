import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        username: "",
      },
      allUsers:[
       
      ]
    };
  }

  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  handleSubmit = () => {
    let newUsers = [...this.state.allUsers]
    newUsers.push({...this.state.user})
    this.setState({allUsers:newUsers})
    this.handleClear()
  };

  handleClear=()=>{
    this.setState({user:{
      email: "",
      username: "",
    }})
  }
  handleDelete=(i)=>{
    let newUsers = this.state.allUsers.filter((user,index)=>{
      return i !== index
    })
    this.setState({allUsers:newUsers})
  }
  render() {
    return (
      <div>
        <h2>Welcome to CRUD Application </h2>

        <hr />

        <div className="container">
          <div className="row">
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
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
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
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.allUsers.map((person,i)=>{
                    return <tr>
                      <td>{i+1}</td>
                      <td>{person.email}</td>
                      <td>{person.username}</td>
                      <td><button class="btn btn-warning">Edit</button></td>
                      <td><button class="btn btn-danger" onClick={()=>{this.handleDelete(i)}}>Delete</button></td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
