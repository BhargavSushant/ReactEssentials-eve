import "./App.css";
import { useState, useEffect } from "react";

// const [firstCity, second] = [
//   "Tokyo",
//   "Tahoe City",
//   "Bend"
// ];

// console.log(firstCity);
// console.log(second);

function App({ currentEmotion }) {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("tired")

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  return (
    <div className="App">
      <h1>current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>SAD</button>
      <button onClick={() => setEmotion("happy")}>happy</button>
      <button onClick={() => setEmotion("confused")}>CONFUSED</button>
      <h1>Secondary emotion is {secondary}</h1>
      <button onClick={()=>setEmotion("tired")}></button>
    </div>
  );
}

export default App;
