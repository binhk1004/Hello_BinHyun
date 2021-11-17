import { Card, Button } from "react-bootstrap";
import "./Record.css";

const Record = () => {
    return (
    <div className="record-container" id="5">

     <div className="record-title">
        <h1>Record and Save</h1>
    </div>

    <div className="main">
        <Card className="body" style={{ width: '30rem' }}>
            <Card.Body>
                <div className="card-head">
                    <img src = '/images/github-icon.svg' className="card-image"/>
                    <Card.Title className="card-title">GitHub</Card.Title> 
                </div>
                <Card.Text className="card-contents">
                    <li>소스코드 저장소 입니다.</li> 
                    <br></br>
                    <li>개인 프로젝트 및 공부한 코드를 저장해 두었습니다.</li> 
                </Card.Text>
                <Button href="https://github.com/binhk1004">깃허브 둘러보기</Button>
            </Card.Body>
        </Card>

        <Card className="body" style={{ width: '30rem' }}>
            <Card.Body>
                <div className="card-head">
                    <img src = '/images/velog.png' className="card-image"/>
                    <Card.Title className="card-title">Velog</Card.Title> 
                </div>
                <Card.Text className="card-contents">
                    <li>공부 혹은 기록을 위한 블로그 입니다.</li> 
                    <br></br>
                    <li>프로젝트의 진행 및 공부한 내용을 기록해두었습니다.</li> 
                </Card.Text>
               <Button href="https://velog.io/@binhk1004">블로그 둘러보기</Button>
            </Card.Body>
        </Card>
    </div>
    </div>
    
    )
}

export default Record;