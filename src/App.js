//import logo from "./logo.svg";
import recyclelogo from "./recyclelogo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostData from "./PostData";
import { Container } from "react-bootstrap";
import React from "react";
import { Trash } from "react-bootstrap-icons";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import ThinkDeeDash from "./ThinkDeeDash";

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <img src={recyclelogo} className="App-logo" alt="logo" />
          <h4>
            Welcome to IoT-Trash <Trash />
          </h4>
        </header>

        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ThinkDeeDash />} />
            <Route path="/api" element={<PostData />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Container>
      <p>Web applicaion version 1.0.0 @2022</p>
    </div>
  );
}

export default App;
