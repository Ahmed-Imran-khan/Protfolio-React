import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/Contact";
import FirstPage from "./components/FirstPage";
import CV from "./components/CV";
import Services from "./components/Services";
import Projects from "./components/Projects";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
