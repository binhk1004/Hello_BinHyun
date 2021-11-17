import { Card } from "react-bootstrap"
import "./Project.css";


const Project = () => {
    return(
        <div className="project-container">
            <div className="title">
                <h1>Project</h1>
            </div>
            <div>
                <Card border="dark" className="card-list" style={{ width: '55rem', height: '55rem' }}>
                    <div className="card-title">
                        <h3>나의 맛집을 찾아보자!</h3>
                    </div>
                    <Card.Body className="test">
                        <Card.Img variant="top" src="images/java.svg" />
                        <div className="card-text">
                            <Card.Text>
                            국비지원 '스마트웹자바' 과정을 수강 한 뒤 만들어본 Spring 게시판 프로젝트 입니다.
                            Kakao API를 이용하여 지역명과 음식명을 검색 할 수 있습니다.
                            게시판의 응용버전이라고 볼 수 있는 프로젝트로써,
                            회원가입 기능 및 게시물 작성, 수정, 삭제 기능을 포함하고 있습니다.
                            또한 관리자 계정으로 로그인시 전체 게시물을 확인 할 수 있으며, <br></br>
                            수정, 삭제가 가능합니다. 
                            
                            </Card.Text>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                    {/* <Button className="button" href="#">Card Link</Button> */}
                </Card>
            </div>
        </div>
    )

}

export default Project;