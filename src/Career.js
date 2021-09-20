import { Col, Container, Row } from "react-bootstrap";
import "./Carrer.css";
import carrer1 from "./static/images/carrer1.jpg";
import carrer2 from "./static/images/carrer2.png";

const Carrer = () => {
  return (
    <div>
      <div>
        <h1>Work Experience</h1>
      </div>
      <container>
        <div className="test">
          <div className="carrer">
            <div>
              <img className="carrer_image" src={carrer1} alt="경매이징"></img>
            </div>
            <div className="carrer_contents">
              <div>
                <h3>경매이징 (백스테이션)</h3>
              </div>
              <div>기간 : 2020.07 ~ 2020.12 (6개월)</div>
              <div>
                부동산 경매를 좀 더 쉽게 접할 수 있게끔, 정보를 제공하는 사이트
                입니다.
              </div>
              <div>
                주 담당했던 업무는 'Python' 을 이용하여 'crawler'를 제작, 'sql
                alchemy'를 통하여 DB에 데이터 삽입 및 관리를 담당했습니다.
              </div>
              <div>
                <h5>Linux 환경에서 백업 기능 구현</h5>
                <li>crontab을 이용한 서버 자동 백업 기능 구현</li>
                <h5>Python을 이용한 Crawler 제작</h5>
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
                <h5>ORM을 이용한 SQL DB 관리</h5>
                <li>
                SQL Alchemy를 이용하여 crawler로 발생된 Data 삽입 및 관리
                </li>
              </div>
            </div>
          </div>
          <div className="carrer">
            <div>
              <img className="carrer_image" src={carrer2} alt="경매이징"></img>
            </div>
            <div className="carrer_contents">
              <div>
                <h3>에프엘이에스 (FLES)</h3>
              </div>
              <div>기간 : 2020.12 ~ 2021.03 (4개월)</div>
              <div>
                헬로우운세, 궁타 등 운세 서비스를 제공하는 업체 입니다.
              </div>
              <div>
                주 담당했던 업무는 기존 서비스 유지 보수 및 신규 프로젝트 진행을 담당 했습니다.
              </div>
              <div>
                <h5>ASP로 제작된 기존 서비스 (헬로우운세, 궁타) 기능 유지 보수</h5>
                <li>ASP로 제작된 기존 서비스 기능 추가 및 유지보수</li>
                <li>MS SQL을 이용한 DB 조작 및 수정</li>
                <h5>신규 프로젝트 진행</h5>
                <li>React JS로 제작 되는 신규 프로젝트 진행</li>
                <h5>Git 도입 및 업무 관련 여러 Tool 연동</h5>
                <li>기존 Git을 사용하지 않고 FTP등의 방식으로 진행 되던 업무에 Git 연동</li>
              </div>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Carrer;
