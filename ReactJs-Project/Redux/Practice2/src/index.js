import { createSlice,configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

ReactDOM.render(
  <App />,
  document.getElementById('root'));

