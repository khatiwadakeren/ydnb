import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BudgetPlanner from "./pages/BudgetPlanner";
import Guide from "./pages/Guide";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5001") // Express server URL
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1>{message}</h1> {/* Keeps your backend connection */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
