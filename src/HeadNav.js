import { Nav } from "react-bootstrap";

import {Link} from 'react-scroll';
import './HeadNav.css';


const HeadNav = () => {
  return (
    <nav className="nav">
      <Nav className="justify-content-end fixed-top" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link activeClass="active" to='Bio' spy={true} smooth={true} duration={5}>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to='aboutme-container' spy={true} smooth={true} duration={5}>About Me</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <Link to='skill-container' spy={true} smooth={true} duration={5}>Skills and Tools</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">
            <Link to='carrer-container' spy={true} smooth={true} duration={5}>Work Experience</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default HeadNav;
