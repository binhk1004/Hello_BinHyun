
import { Card } from "react-bootstrap";
import DataMaps from './DataMap.json'
import "./Skills.css";


const Skills = () => {

  return (
    <div className="skill-container">
        <div className="skill-title">
            <h1>Skills and Tools</h1>
        </div>
        <div className="contents">
            <div className="contents-head">
                {DataMaps.CardContents.map((CardContents)=>
                <div className={CardContents.CardClass}>
                <Card border="light" className="skillCards">
                    <header>{CardContents.CardTitle}</header>
                    <Card.Body>
                        {CardContents.Content&&CardContents.Content.map((Content)=><img key={Content.id} src={Content.image} alt={Content.title} className={Content.className} />)}
                    </Card.Body>
                </Card>
                </div>)}
            </div>
        </div>
    </div>
  );
};

export default Skills;
