import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { usersReducer } from './store/UsersSlice';

import { Provider } from 'react-redux'
import {configureStore } from '@reduxjs/toolkit'




const store = configureStore({
  reducer:usersReducer
})
 ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

