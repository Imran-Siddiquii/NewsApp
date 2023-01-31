import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsItem from "./Components/NewsItem";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      array: ["1", "2", "3", "4", "5", "6", "7", "8,", "9", "10", "11", "12"],
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      this.setState({ loading: true });

      const res = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a8caf6fce60448f68e0b2e2e5abf1f47&page=${this.state.page}`
      );
      const data = await res.json();
      this.setState({ loading: false });
      this.setState({ article: data.articles });
    } catch (error) {
      this.setState({ loading: false });
      console.log("connect to the internet", error);
    }
  }
  handleChange = (event, value) => {
    this.setState({ page: value });
    this.componentDidMount();
  };
  render() {
    console.log(this.state.article);
    return (
      <>
        <Navbar />
        <div className="mx-12 grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2">
          {this.state.loading &&
            this.state.array?.map((val) => {
              return (
                <div role="status" className="max-w-sm animate-pulse my-7">
                  <div className="h-[160px] bg-gray-200 dark:bg-gray-700 w-100 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              );
            })}
        </div>
        <div className="mx-12 grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2">
          {this.state?.article?.map((val, index) => (
            <NewsItem key={index} props={val} />
          ))}
        </div>
        <div className="flex items-center justify-center my-6">
          <Stack spacing={3}>
            <Pagination
              count={10}
              page={this.state.page}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
              onChange={this.handleChange}
            />
          </Stack>
        </div>
      </>
    );
  }
}
