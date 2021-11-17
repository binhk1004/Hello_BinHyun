import { Card, Button } from "react-bootstrap";
import "./Carrer.css";

const Clickevent = () => {
  window.location.href = "http://fles.co.kr/"
}

const Carrer = () => {
  return (
    <div className="carrer-container" id="4"> 
      <div className="title">
        <h1>Work Experience</h1>
      </div>
      <div className="Cardcontainer">
        <div className="CarrerCard">
          <Card style={{ width: "50rem", border:"light"}}>
            <Card.Img
              variant="top"
              className="carrer_image"
              src="images/carrer1.jpg"
            />
            <Card.Body>
              <Card.Title>경매이징 (백스테이션)</Card.Title>
              <Card.Text>
                기간 : 2020.07 ~ 2020.12 (6개월)<br></br>
                부동산 경매를 좀 더 쉽게 접할 수 있게끔, 정보를 제공하는 사이트
                입니다.<br></br>
                주로 담당했던 업무는 'Python' 을 이용하여 'crawler'를 제작,
                <br></br>
                'sql alchemy'를 통하여 DB에 데이터 삽입 및 관리를 담당했습니다.
              </Card.Text>
              <Card.Text>
                <h7>Linux 환경에서 백업 기능 구현</h7>
                <li>crontab을 이용한 서버 자동 백업 기능 구현</li>
                <br></br>
                <h7>Python을 이용한 Crawler 제작</h7>
                <li>
                  Beautiful Soup 와 Selenium 을 이용하여 대법원 경매 사이트 내에
                  다수 조회 물건 및 다수 관심 물건 counting 기능 구현
                </li>
                <li>
                  대법원 경매 사이트 내에 부동산 매각공고 변경 사항 crawler 제작
                </li>
                <li>
                  대법원 경매 사이트 내에 물건 상세검색 특이사항 crawler 제작
                </li>
                <br></br>
                <h7>ORM을 이용한 SQL DB 관리</h7>
                <li>
                  SQL Alchemy를 이용하여 crawler로 발생된 Data 삽입 및 관리
                </li>
              </Card.Text>
              <Button variant="primary">회사 홈페이지</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="CarrerCard">
          <Card style={{ width: "50rem" }}>
            <Card.Img
              variant="top"
              className="carrer_image"
              src="images/carrer2.png"
            />
            <Card.Body>
              <Card.Title>에프엘이에스 (FLES)</Card.Title>
              <Card.Text>
                기간 : 2020.12 ~ 2021.03 (4개월)<br></br>
                헬로우운세, 궁타 등 운세 서비스를 제공하는 업체 입니다.<br></br>
                주로 담당했던 업무는 기존 서비스 유지 보수 및 신규 프로젝트
                진행을 담당 했습니다.
              </Card.Text>
              <Card.Text>
                <h7>
                  ASP로 제작된 기존 서비스 (헬로우운세, 궁타) 기능 유지 보수
                </h7>
                <li>ASP로 제작된 기존 서비스 기능 추가 및 유지보수</li>
                <li>MS SQL을 이용한 DB 조작 및 수정</li>
                <br></br>
                <h7>신규 프로젝트 진행</h7>
                <li>React JS로 제작 되는 신규 프로젝트 진행</li>
                <br></br>
                <h7>Git 도입 및 업무 관련 여러 Tool 연동</h7>
                <li>
                  기존 Git을 사용하지 않고 FTP등의 방식으로 진행 되던 업무에 Git
                  연동
                </li>
              </Card.Text>
              <Button variant="primary" onClick = {Clickevent}>회사 홈페이지</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
