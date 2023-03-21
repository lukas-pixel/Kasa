import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Propos from "./pages/Propos";
import Header from "./components/Header"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
        </Routes>
    </Router>
  </React.StrictMode>
)
