import "./App.css";
import { useReducer } from "react";

function App({ currentEmotion }) {
  // const [checked, setChecked] = useState(false);
  const [checked, setChecked] = useReducer((state) => !state, false);
  return (
    <div className="App" >
      <h1>this is a checkbox</h1>
      <input
        type="checkbox"
        checked={checked}
        onChange={setChecked}
     />
      <br />
      <label>label is {checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App
