import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/index'
import FicheLogement from "./pages/Fiche-Logement";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router exact path="/">
      <Home />
    </Router>
    <Router path="/fichelogement">
      <FicheLogement />
    </Router>
  </React.StrictMode>
)
