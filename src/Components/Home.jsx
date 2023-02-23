import React, { Component } from "react";
import Navbar from "./Navbar";
import NewsItem from "./NewsItem";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsItem pageSize={12} category={this.props} />
      </div>
    );
  }
}
