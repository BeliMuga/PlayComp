import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import { motion } from "motion/react";

import Home from "./pages/Home.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import Faqs from "./pages/Faqs.jsx";
import Error404 from "./pages/Error404.jsx";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import CicuitBoard from "./assets/CicuitBoard.jsx";

function App() {
  return (
    <div className="App">
      <div className="svg-container">
        <CicuitBoard className="background-svg" />
      </div>
      <div className="content">
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/resources"
            element={<Resources />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/faqs"
            element={<Faqs />}
          />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
