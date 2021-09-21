import { Card } from "react-bootstrap";
import "./Skills.css";
import html from './static/images/html-5.svg'
import css from './static/images/css-3.svg'
import js from './static/images/javascript.svg'
import python from './static/images/python.svg'
import java from './static/images/java.svg'
import react from './static/images/react.svg'
import go from './static/images/go.svg'
import typescript from './static/images/typescript-icon.svg'
import linux from './static/images/linux-tux.svg'
import sql from './static/images/mysql.svg'
import git from './static/images/git-icon.svg'
import github from './static/images/github-icon.svg'
import jira from './static/images/jira.svg'
import slack from './static/images/slack-icon.svg'
import trello from './static/images/trello.svg'
import vscode from './static/images/visual-studio-code.svg'
import eclipse from './static/images/eclipse-icon.svg'
import pycharm from './static/images/pycharm.svg'
import webstorm from './static/images/webstorm.svg'
import postman from './static/images/postman-icon.svg'



const Skills = () => {
  return (
    <div className="top">
        <div className="title">
            <h1>Skills and Tools</h1>
        </div>
        <div className="contents">
            <div className="contents-head">
                <div className="cards">
                <Card border="light">
                    <header>I Like</header>
                    <Card.Body>
                        <img src={html} alt="html5" className="photo" />
                        <img src={css} alt="css3" className="photo" />
                        <img src={js} alt="javascript" className="photo" />
                        <img src={python} alt="python" className="photo" />
                        <img src={java} alt="python" className="photo" />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    I'm Interesting<br></br>
                    </header>
                    <Card.Body>
                        <img src={react} alt="react" className="photo" />
                        <img src={go} alt="go" className="photo" />
                        <img src={typescript} alt="typescript" className="photo" />
                        <img src={linux} alt="linux" className="photo" />
                        <img src={sql} alt="sql" className="photo" />
                        <img
                            className="photo"
                            alt="sqlalchemy"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
                        />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Version Control<br></br>
                    </header>
                    <Card.Body>
                        <img src={git} alt="git" className="photo" />
                        <img src={github} alt="github" className="photo" />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Communication<br></br>
                    </header>
                    <Card.Body>
                        <img src={jira} alt="jira" className="photo" />
                        <img src={slack} alt="slack" className="photo" />
                        <img src={trello} alt="trello" className="photo" />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Tools<br></br>
                    </header>
                    <Card.Body>
                        <img src={vscode} alt="vscode" className="photo" />
                        <img src={eclipse} alt="eclipse" className="photo" />
                        <img src={pycharm} alt="pycharm" className="photo" />
                        <img src={webstorm} alt="webstorm" className="photo" />
                        <img src={postman} alt="postman" className="photo" />
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Skills;
