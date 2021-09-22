import { Card } from "react-bootstrap";
import ImageMaps from './ImageMap.json'
import "./Skills.css";


const Skills = () => {
  return (
    <div className="skill-container">
        <div className="title">
            <h1>Skills and Tools</h1>
        </div>
        <div className="contents">
            <div className="contents-head">
                <div className="cards">
                <Card border="light">
                    <header>I Like</header>
                    <Card.Body>
                        {ImageMaps.SkillLike.map((SkillLike)=><img key={SkillLike.id} src={SkillLike.image} alt={SkillLike.title} className={SkillLike.className} />)}
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    I'm Interesting<br></br>
                    </header>
                    <Card.Body>
                        {ImageMaps.SkillInteresting.map((SkillInteresting)=><img key={SkillInteresting.id} src={SkillInteresting.image} alt={SkillInteresting.title} className={SkillInteresting.className} />)}
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
                        {ImageMaps.SkillVersion.map((SkillVersion)=><img key={SkillVersion.id} src={SkillVersion.image} alt={SkillVersion.title} className={SkillVersion.className} />)}
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Communication<br></br>
                    </header>
                    <Card.Body>
                        {ImageMaps.SkillCommu.map((SkillCommu)=><img key={SkillCommu.id} src={SkillCommu.image} alt={SkillCommu.title} className={SkillCommu.className} />)}
                    </Card.Body>
                </Card>
                </div>
                <div className="cards">
                <Card border="light">
                    <header>
                    Tools<br></br>
                    </header>
                    <Card.Body>
                        {ImageMaps.SkillTools.map((SkillTools)=><img key={SkillTools.id} src={SkillTools.image} alt={SkillTools.title} className={SkillTools.className} />)}
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Skills;
