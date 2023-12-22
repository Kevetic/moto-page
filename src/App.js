import Navigation from "./components/navigation/Navigation";
import LandingPage from "./components/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
