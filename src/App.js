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
            <Route exact path="/" element={<Home category="general" />} />
            <Route
              exact
              path="/general"
              element={<Home key="general" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<Home key="business" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<Home key="entertainment" category="entertainment" />}
            />
            <Route
              exact
              path="/health"
              element={<Home key="health" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<Home key="science" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<Home key="sports" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<Home key="technology" category="technology" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
