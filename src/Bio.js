<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Image} from "react-bootstrap"
=======
import './Bio.css';
>>>>>>> 19eb740123ad68dfca6d647ac921bed8a322e8f0

import "./Bio.css";

function Bio() {
  return (
    <div className="Bio">
      <nav className="nav">
        <Nav variant="pills" defaultActiveKey="/home">
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
      <header className="hello">
        <Container>
          <Col xs={15} md={20}>
            <Image className="photo" src="images/main_profile.jpeg" roundedCircle />
          </Col>
        </Container>
        <br></br>
        <div>
          <h1>김빈현의 포트폴리오</h1>
        </div>
         <br></br>
        <div>
          반갑습니다!<br></br>
          개발이 좋아서 여기까지 오게 된 김빈현 이라고 합니다!
        </div>
      </header>
    </div>
  );
}

export default Bio;
