import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5001") // Express server URL
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
