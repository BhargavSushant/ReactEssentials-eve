import "./App.css";
import { useRef } from "react";

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`Color : ${title} Hex : ${color}`)
    txtTitle.current.value="";
    color.current.value="";
    
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color name" />
      <input ref={hexColor} type="color" />
      <button>Submit</button>
    </form>
  );
}

export default App;
