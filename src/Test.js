import { useEffect } from "react";
import { useState } from "react";
import "./Test.css";

<<<<<<< HEAD
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
         {y > 600 ? <p>참이면 보여줄 이미지</p> : null}
      </div>
    );
  };

export default Test;
=======
function Example() {
    const scrollY = useScrollPosition(60 /*fps*/)
    
    if (scrollY >= 200){
        return <p>참이면 보여줄 HTML</p>;
    }
    return null
  }
  
  export default Example;
>>>>>>> 19eb740123ad68dfca6d647ac921bed8a322e8f0
