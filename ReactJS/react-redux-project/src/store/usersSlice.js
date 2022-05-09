import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: ["Murali", "Raju", "Balaji"],
    products: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
        let delUser = state.users.find((usr)=> usr === action.payload)
        if(delUser){
            state.users = state.users.filter((usr)=> usr !== action.payload)
            return state
        }
    //    state.users.filter((us) => us !== action.payload);
    },
    updateUser: (state, action) => {},
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser, updateUser } = usersSlice.actions;
