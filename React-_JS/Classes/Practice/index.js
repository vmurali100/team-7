import React from 'react';
import ReactDOM from 'react-dom';
import Parentes from './Parentes';
import Practice1 from './Practice1'
import Practice2 from './Practice2';
import { Practice3} from './Practice3';
import { Cherry, Mahesh, Rajesh } from './Practice4';
import reportWebVitals from './reportWebVitals';
import Prakash from './Sample';


ReactDOM.render(
  <React.StrictMode>
    <Practice1/>
    <Practice2/>
    <Practice3/>
    <Rajesh/>
    <Mahesh/>
    <Cherry/> 
    <Prakash/>  
    <Parentes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
