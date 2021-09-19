import { FcBusinessman } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <container className="main">
      <div className="icons">
        <FcBusinessman className="icon"/>
        이름<br></br>
        김빈현
      </div>
      <div className="icons">
        <FcCalendar className="icon"/>
        생년월일<br></br>
        1989년 06월 21일
      </div>
      <div className="icons">
        <FcPhone className="icon"/>
        연락처<br></br>
        010-7310-8057
      </div>
      <div className="icons">
        <FcHome className="icon"/>
        주소지<br></br>
        경상북도 경주시
      </div>
    </container>
  );
};

export default AboutMe;
