import { Nav } from "react-bootstrap";
import {Link} from 'react-scroll';
import React, {useState, useEffect} from 'react';
import './HeadNav.css';


const HeadNav = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <nav className={scrollPosition < 300 ? "start_nav" : "nav"}>
      <Nav className="justify-content-end fixed-top" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to='Bio' spy={true} smooth={true} duration={1}>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to='aboutme-container' spy={true} smooth={true} duration={1}>About Me</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <Link to='skill-container' spy={true} smooth={true} duration={1}>Skills and Tools</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">
            <Link to='carrer-container' spy={true} smooth={true} duration={1}>Work Experience</Link>
          </Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link eventKey="link-5">
            <Link to='record-container' spy={true} smooth={true} duration={1}>Record and Save</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">
            <Link to='project-container' spy={true} smooth={true} duration={1}>Project</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default HeadNav;
