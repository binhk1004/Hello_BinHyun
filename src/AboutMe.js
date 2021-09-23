import { FcBusinessman } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
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
          {Aboutme.IconName} className={Aboutme.IconClass}
          {Aboutme.context}
        </div>)}

        <div className="icons">
          <FcBusinessman className="icon" />
          이름<br></br>
          김빈현
        </div>
        <div className="icons">
          <FcCalendar className="icon" />
          생년월일<br></br>
          1989년 06월 21일
        </div>
        <div className="icons">
          <FcPhone className="icon" />
          연락처<br></br>
          010-7310-8057
        </div>
        <div className="icons">
          <FcHome className="icon" />
          주소지<br></br>
          경상북도 경주시
        </div>
        <div className="icons">
          <FcInvite className="icon" />
          메일주소<br></br>
          binhk1004@naver.com
        </div>
        <div className="icons">
          <FcLibrary className="icon" />
          학력<br></br>
          alma la scuola internazionale di cucina
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
