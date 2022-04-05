import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import All from './String obj Array/All';
// import Event from './String obj Array/Event';
import ClassEvent from './String obj Array/ClassEvent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <All/> */}
    {/* <Event/> */}
    <ClassEvent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
