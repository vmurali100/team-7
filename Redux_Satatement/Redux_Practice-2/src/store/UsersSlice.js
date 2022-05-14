import {createSlice} from "@reduxjs/toolkit"

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
      users:["Hello Surya","Iam Student","Of Sunline It Instions"],
      Mywork:[],
      MyGodown:[]
    },
    reducers: {
       adding:(state,action)=>{
           state.users.push(action.payload)
       },
       deleting:(state,action)=>{
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
  export  const {adding,deleting, updateuser} = UsersSlice.actions