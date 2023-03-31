import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Propos from "./pages/Propos";
import Error from "./components/Error";
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
)