import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Image} from "react-bootstrap"
import './Bio.css';
import profile from './static/images/main_profile.jpeg'


import "./Bio.css";

function Bio() {
  return (
    <div className="Bio">
      <header className="hello">
        <Container>
          <Col xs={15} md={20}>
            <Image className="photo" src={profile} roundedCircle />
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
