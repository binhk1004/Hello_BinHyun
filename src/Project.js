import { Card } from "react-bootstrap"
import "./Project.css";


const Project = () => {
    return(
        <div className="project-container">
            <div className="project-title">
                <h1>Project</h1>
            </div>
            <div>
                <Card border="dark" className="card-list" style={{ width: '75rem', height: '55rem' }}>
                    <div className="card-title">
                        <h3>나의 맛집을 찾아보자!</h3>
                    </div>
                    <Card.Body className="test">
                        <div className="project-image">
                        <Card.Img variant="top" src="images/where_is_my_restaurant.gif" className="project-view" />
                        </div>
                        
                        <Card.Text className="project-text">
                        <p>국비지원 '스마트웹자바' 과정을 수강 한 뒤 만들어본 Spring 게시판 프로젝트 입니다.<br></br>
                        Kakao API를 이용하여 지역명과 음식명을 검색 할 수 있습니다.<br></br> 
                        Spring의 기본 모델이라고 할 수 있는 MVC 모델을 참고하여 제작 하였으며, AWS로 배포되었습니다. <br></br> 
                        프로젝트 관련 진행 상황을 블로그에 정리해 두었습니다.</p>
                        <p>해당 프로젝트를 진행하면서 'Java' 라는 언어, 'Spring' 이라는 프레임워크에 대해서 많은 것을
                        공부해볼 수 있는 좋은 기회였고, 또한 기존의 주먹구구식으로 진행하였던 웹 개발에 대해서
                        좀 더 깊고 백엔드에 대해서 맛 볼 수 있는 기회라 즐겁게 학습 하였습니다.<br></br> 
                        다만 아쉬웠던 점은 에러 핸들링에 대한 이해 및 학습이 많이 부족하였고, 데이터베이스를 다루는 부분
                        그리고 로그인과 관련하여 http통신에 대해 좀 더 공부를 해보았으면 하는 아쉬움을 느끼었습니다.</p>
                        <hr width="100%"></hr>
                        <p>주요기능 : 로그인, 로그아웃, 게시글 작성,수정, 삭제, 관리자계정 로그인</p>
                        <p>GitHub : <a href="https://github.com/binhk1004/where_is_my_restaurant" target="_blank" rel="noopener noreferrer">github.com/binhk1004/where_is_my_restaurant</a></p>
                        <p>블로그 : <a href="https://velog.io/@binhk1004/series/%EC%9E%90%EB%B0%94%EB%A5%BC-Java%EB%B3%B4%EC%9E%90" target="_blank" rel="noopener noreferrer">velog.io/@binhk1004</a></p>
                        <p>도메인 : <a href="http://myrestaruant.tk/" target="_blank" rel="noopener noreferrer">myrestaruant.tk/</a></p>
                        <p>Front-end : Jsp, Css, JavaScript, Jquery, bootstrap</p>
                        <p>Back-end : Java, Spring</p>
                        <p>DataBase : MySQL</p>
                        <p>API : kakao map</p>
                        <p>Deployment: GitHub, AWS (EC2, RDS, Route 53)</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="dark" className="card-list" style={{ width: '75rem', height: '35rem' }}>
                    <div className="card-title">
                        <h3>포트폴리오 웹사이트(React)</h3>
                    </div>
                    <Card.Body className="test">
                        <div className="project-image">
                            <Card.Img variant="top" src="images/hello_binhyun.gif" className="project-view" />
                        </div>
                        <Card.Text className="project-text">
                        <p>
                            취업준비를 위해 React로 제작된 개인 PR용 페이지 입니다. <br></br>
                            간단한 이력 및 신상정보, 기술스택, 진행하였던 프로젝트에 대해 기술하였습니다. <br></br>
                        </p>
                        <p>
                            React를 혼자 학습하면서 React의 기본적인 부분들을 다뤄보았고, <br></br>
                            특히 반복문 대신 map 함수를 사용하여 json파일을 처리 하는 것에 대해서 학습 하게 되었습니다.<br></br>
                            또한 React의 기본단위로 할 수 있는 Component에 대해서 알아 볼 수 있는 기회였습니다. <br></br>
                        </p>
                        <hr width="100%"></hr>
                        <p>주요기능 : 인적사항, 기술스택, 경력사항 등 기술</p>
                        <p>GitHub : <a href="https://github.com/binhk1004/Hello_BinHyun" target="_blank" rel="noopener noreferrer">github.com/binhk1004/Hello_BinHyun</a></p>
                        <p>도메인 : <a href="https://binhyun.netlify.app/" target="_blank" rel="noopener noreferrer">binhyun.netlify.app</a></p>
                        <p>Front-end : Html, Css, JavaScript, React</p>
                        <p>Deployment: GitHub, Netlify</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )

}

export default Project;