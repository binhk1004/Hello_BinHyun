import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bio from './Bio';
import Carrer from './Career';
import AboutMe from './AboutMe';
import HeadNav from './HeadNav';

ReactDOM.render(
  <React.StrictMode>
    <HeadNav />
    <Bio /> 
    <AboutMe />
    <Carrer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
