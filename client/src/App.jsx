import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import Faqs from "./pages/Faqs.jsx";
import Error404 from "./pages/Error404.jsx";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import CicuitBoard from "./assets/CicuitBoard.jsx";
import Main3D from "./assets/Main3D.jsx";

function App() {
  return (
    <div className="App">
      <CicuitBoard />
      {/* <Main3D /> */}

      <div className="content">
        {/* <Header></Header> */}
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
