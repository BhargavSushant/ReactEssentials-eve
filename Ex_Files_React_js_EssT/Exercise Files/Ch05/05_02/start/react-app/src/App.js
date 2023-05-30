// Creating controlled form elements
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    alert(`Color : ${title} Hex : ${color}`);
    e.preventDefault();
    setTitle("")
    setColor("#000000")
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="color name"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="color"
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;

