import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

const Countdata = createSlice({
  name: "count",
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

const store = configureStore({
  reducer:Countdata.reducer,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
