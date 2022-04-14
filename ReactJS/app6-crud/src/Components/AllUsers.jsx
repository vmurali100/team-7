import React, { Component } from "react";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 43,
          email: "MMathis@mattis.org",
          username: "LLessenberry",
          password: "5hh8a",
        },
        {
          id: 44,
          email: "AMick@porta.ly",
          username: "GDykstra",
          password: "HK4Lh",
        },
        {
          id: 45,
          email: "PLoehfelm@nec.com",
          username: "NDarnley",
          password: "u73v3",
        },
        {
          id: 46,
          email: "KMalstrom@sollicitudin.com",
          username: "PWieber",
          password: "Q1lf5",
        },
        {
          id: 47,
          email: "SArrington@sit.io",
          username: "FThomason",
          password: "iheyO",
        },
      ],
    };
  }
  addNewUser = () => {
    let allUsers = [...this.state.users];
    allUsers.push({
      id: 128,
      email: "ABoomer@aliquam.ly",
      username: "APreston",
      password: "mT8PI",
    });
    this.setState({ users: allUsers });
  };
  render() {
    return (
      <div>
        <button onClick={this.addNewUser}>Add New User</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">User Name</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
