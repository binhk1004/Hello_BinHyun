import { Card } from "react-bootstrap";
import "./Skills.css";

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
                    <img
                        className="photo"
                        alt="html5"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="css3"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="javascript"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                    <img
                        className="photo"
                        alt="python"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="java"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                    />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    I'm Interesting<br></br>
                    </header>
                    <Card.Body>
                    <img
                        className="photo"
                        alt="react"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="go"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="typescript"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    />
                    <img
                        className="photo"
                        alt="linux"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    />
                    <img
                        className="photo"
                        alt="sql"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    />
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
                    <img
                        className="photo"
                        alt="git"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="github"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Communication<br></br>
                    </header>
                    <Card.Body>
                    <img
                        className="photo"
                        alt="jira"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="slack"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="trello"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"
                    />
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Tools<br></br>
                    </header>
                    <Card.Body>
                    <img
                        className="photo"
                        alt="vscode"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                    />
                    <img
                        className="photo"
                        alt="pycharm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"
                    />
                    <img
                        className="photo"
                        alt="webstorm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg"
                    />
                    <img
                        className="photo"
                        alt="atom"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg"
                    />
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Skills;
