import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Bootstrap JS
import "bootstrap/dist/css/bootstrap.min.css"; 

// Import Components
import Home from "./Home";
import WestRegistration from "./WestRegistration";
import EastRegistration from "./EastRegistration";
import RegistrationSuccess from "./RegistrationSuccess"; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* West Rayalaseema Form */}
          <Route path="/west-registration" element={<WestRegistration />} />
          
          {/* East Rayalaseema Form */}
          <Route path="/east-registration" element={<EastRegistration />} />

          {/* New Success Page Route */}
          <Route path="/registration-success" element={<RegistrationSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;