import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Login from "./authPages/Login/Login";
import Register from "./authPages/Register/Register";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
