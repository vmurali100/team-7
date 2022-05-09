import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser,updateUser } from "../features/usersSlice";

export const UsersFunc = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    id:""
  });

  const [isEdit, setisEdit] = useState(false)
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  console.log(allUsers);

  const handleClear = () => {
    setUser({
      email: "",
      username: "",
      id:1
    });
  };


  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleSubmit = () => {
    dispatch(addUser(user));
    handleClear()
  };

  const handleDelete=(person)=>{
    dispatch(deleteUser(person))
  }

  const editUser=(usr)=>{
    setisEdit(true)
    setUser(usr)
  }

  const handleUpdate=()=>{
    setisEdit(false)
    dispatch(updateUser(user))
  }
  
  return (
    <div>
      <div>
        <h2>Welcome to REDUX - CRUD Application </h2>

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
                    value={user.email}
                    onChange={(e) => {
                      handleChange(e);
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
                    value={user.username}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="mb-3" hidden>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={user.id}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                {isEdit ? <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update
                </button>:<button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button> }
                

               
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
                  {allUsers.map((person, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{person.email}</td>
                        <td>{person.username}</td>
                        <td>
                          <button className="btn btn-warning" onClick={()=>{editUser(person,i)}}>Edit</button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleDelete(person);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
