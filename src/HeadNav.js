import { Nav } from "react-bootstrap";
import './HeadNav.css';


const HeadNav = () => {
  return (
    <nav className="nav">
      <Nav className="justify-content-end fixed-top" variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Bio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Carrer</Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default HeadNav;
