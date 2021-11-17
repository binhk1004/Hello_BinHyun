import { Card, Button } from "react-bootstrap"
import "./Project.css";


const Project = () => {
    return(
        <div className="project-container">
            <div className="title">
                <h1>Project</h1>
            </div>
            <div>
                <Card border="dark" className="card-list" style={{ width: '60rem', height: '60rem' }}>
                    <Card.Body className="test">
                        <Card.Img variant="top" src="images/java.svg" />
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    {/* <Button className="button" href="#">Card Link</Button> */}
                </Card>
            </div>
        </div>
    )

}

export default Project;