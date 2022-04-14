import React, { Component } from "react";

export default class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          fname: "Glenn",
          lname: "Dodd",
        },
        {
          fname: "Aristotle",
          lname: "Leblanc",
        },
        {
          fname: "Fernando",
          lname: "Harmati",
        },
        {
          fname: "Javier",
          lname: "Leon",
        },
        {
          fname: "Darryl",
          lname: "Diaz",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
              {this.state.users.map((user,i)=>{
                  return <tr>
                      <td>{i+1}</td>
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                  </tr>
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
