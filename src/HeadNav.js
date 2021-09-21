import { Nav } from "react-bootstrap";
import {animateScroll as scroll} from 'react-scroll'
import './HeadNav.css';


const HeadNav = () => {
  return (
    <nav className="nav">
      <Nav className="justify-content-end fixed-top" variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => scroll.scrollToTop({duration: 5})}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => scroll.scrollTo(350,  {duration: 5})}>About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => scroll.scrollTo(700,  {duration: 5})}>Skills and Tools</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4"onClick={() => scroll.scrollTo(1300,  {duration: 5})}>Work Experience</Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default HeadNav;
