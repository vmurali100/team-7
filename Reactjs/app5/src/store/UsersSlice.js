import {createSlice} from "@reduxjs/toolkit"

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
      users:["Balaji","Kidambi","Iyangar"],
      projects:[],
      product:[]
    },
    reducers: {
       adduser:(state,action)=>{
           state.users.push(action.payload)
       },
       deleteuser:(state,action)=>{
           let deluser=state.users.find((usr)=>usr === action.payload)
           if(deluser){
               state.users=state.users.filter((usr)=> usr !== action.payload)
               return state
           }
       },
       updateuser:(state,action)=>{}
      },
  });

  export default UsersSlice.reducer
  export  const {adduser,deleteuser, updateuser} = UsersSlice.actions