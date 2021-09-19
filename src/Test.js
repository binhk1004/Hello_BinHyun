import useScrollPosition from '@react-hook/window-scroll'

function Example() {
    const scrollY = useScrollPosition(60 /*fps*/)
    
    if (scrollY >= 200){
        return <p>참이면 보여줄 HTML</p>;
    }
    return null
  }
  
  export default Example;
