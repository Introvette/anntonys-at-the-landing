import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/Home/home";
import AboutPage from "./Components/Pages/About/about";
import ContactPage from "./Components/Pages/Contact/contact";
import MenuPage from "./Components/Pages/Menu/menu";
import CateringPage from "./Components/Pages/Catering/catering";
import Policy from "./Components/privacyPolicy";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
