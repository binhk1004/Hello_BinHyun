import { useEffect } from "react";
import { useState } from "react";
import "./Test.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onscroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
};

const Test = () => {
  const { y } = useScroll();
  console.log(y);
    return (
      <div className="Example">
         {y > 600 ? <p>참이면 보여줄 이미지</p> : <p>실패</p>}
      </div>
    );
  };

export default Test;
