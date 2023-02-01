import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/general" element={<Home />} />
            <Route exact path="/business" element={<Home />} />
            <Route exact path="/entertainment" element={<Home />} />
            <Route exact path="/health" element={<Home />} />
            <Route exact path="/science" element={<Home />} />
            <Route exact path="/sports" element={<Home />} />
            <Route exact path="/technology" element={<Home />} />
          </Routes>
        </Router>
      </>
    );
  }
}
