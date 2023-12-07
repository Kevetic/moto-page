import Navigation from "./components/navigation/Navigation";
import LandingPage from "./components/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    async function fetchExercises() {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja`,
        {
          headers: {
            "X-Api-Key": "zZYorbN6k1AZ8AsiLHEkqA==WwBF1T9Vnno6gRGG",
          },
        }
      );
      const data = await response.json();
      setData(data);
    }

    fetchExercises();
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
