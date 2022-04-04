import React from 'react';
import ReactDOM from 'react-dom';
import {Deena} from './multiple_components';

import App from './App';
import Raju from './Raju'
import { Sadik } from './multiple_components'
import Raju1 from './class_component'
import Parentcomp from './Parentcomponent';
// above step means we are bringing a functional component from another javascript file.
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Raju />
    <Sadik />
    <Raju1 />
    <Deena />
    {/* <Parentcomp /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

