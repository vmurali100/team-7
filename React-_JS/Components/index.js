import React from 'react';
import ReactDOM from 'react-dom';
import { Fruits } from './Components_React/ClassComponents/CreateArray';
import Content from './Components_React/ClassComponents/CreateObject';
import { Demo } from './Components_React/ClassComponents/CreateString';
import { User } from './Components_React/ClassComponents/E-Target.e/e.target';
// import { StateEvent } from './Components_React/CompStateEVENTS/StateEvents';
// import FunStateEvent from './Components_React/Functional Component/FunStateEvent'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Fruits/>
    <Demo/>
    <Content/>
    {/* <StateEvent/> */}
    {/* <FunStateEvent/> */}
    <User/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
