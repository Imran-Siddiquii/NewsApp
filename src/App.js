import "./App.css";
// import React, { useState } from "react";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsItem from "./Components/NewsItem";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      array: ["1", "2", "3", "4", "5", "6", "7", "8,", "9", "10", "11", "12"],
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      this.setState({ loading: true });

      const res = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-12-30&sortBy=publishedAt&apiKey=a8caf6fce60448f68e0b2e2e5abf1f47"
      );
      const data = await res.json();
      this.setState({ loading: false });
      this.setState({ article: data.articles });
    } catch (error) {
      this.setState({ loading: false });
      console.log("connect to the internet", error);
    }
  }
  render() {
    console.log(this.state.article);
    return (
      <>
        <Navbar />
        <div className="mx-12 grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2">
          {this.state.loading &&
            this.state.array?.map((val) => {
              return (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-[160px] bg-gray-200 dark:bg-gray-700 w-48 mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              );
            })}
        </div>
        <div className="mx-12 grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2">
          {this.state?.article?.map((val) => (
            <NewsItem props={val} />
          ))}
        </div>
      </>
    );
  }
}
