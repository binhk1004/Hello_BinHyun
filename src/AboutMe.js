import DataMaps from './DataMap.json'
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme-container">
        <h1>About Me</h1>
      </div>
      <div className="main">
        {DataMaps.Aboutme.map((Aboutme)=>
        <div className={Aboutme.className}>
          <img className={Aboutme.IconClass} src={Aboutme.IconName} alt={Aboutme.IconAlt}/>
          {Aboutme.ContextTitle}<br></br>
          {Aboutme.Context}
        </div>)}
      </div>
    </div>
  );
};

export default AboutMe;
