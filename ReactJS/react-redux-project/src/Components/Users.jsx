import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/usersSlice";

export const Users = () => {
  // TO Access Data from Store , we Need Selectors
  const allUsers = useSelector((state) => {
      console.log(state)
      return state.users
  });
  // To Trigger An action , We need a dispatch hook 
  const dispatch = useDispatch()
  console.log(allUsers)

  const handleAddUser = ()=>{
      dispatch(addUser("Rahman"))
  }

  const handleDeleteUser = (user)=>{
    dispatch(deleteUser(user))
  }
  return (
    <div>
      <h2>Users Component</h2>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
          {allUsers.map((user)=> <li key={user} onClick={()=>{handleDeleteUser(user)}} >{user}</li> )}
      </ul>
    </div>
  );
};
