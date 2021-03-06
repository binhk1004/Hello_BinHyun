import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import HeadNav from './HeadNav';
import Bio from './Bio';
import AboutMe from './AboutMe';
import Skills from './Skills'
import Carrer from './Career';
import Record from './Record';
import Project from './Project';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <HeadNav />
    <Bio /> 
    <AboutMe />
    <Skills />
    <Carrer />
    <Record />
    <Project />
    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
