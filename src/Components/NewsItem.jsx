import React, { Component } from "react";
// import NewsItem from "./Components/NewsItem";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      array: ["1", "2", "3", "4", "5", "6", "7", "8,", "9", "10", "11", "12"],
      page: 1,
      totalResult: null,
    };
  }
  // `https://newsapi.org/v2/everything?q=bitcoin&${this.props.category}&apiKey=a8caf6fce60448f68e0b2e2e5abf1f47&page=${this.state.page}&pageSize=${this.props.pageSize}`
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      this.setState({ loading: true });

      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a8caf6fce60448f68e0b2e2e5abf1f47&page=${this.state.page}&pageSize=${this.props.pageSize}`
      );
      const data = await res.json();
      console.log("data :>> ", data);
      this.setState({
        loading: false,
        article: data.articles,
        totalResult: data.totalResults,
      });
    } catch (error) {
      this.setState({ loading: false });
      console.log("connect to the internet", error);
    }
  }
  handleChange = (event, value) => {
    console.log(value, "page number");
    this.setState({ page: value });
    this.componentDidMount();
  };
  render() {
    return (
      <>
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
          {!this.state.loading &&
            this.state?.article?.map((val, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="/">
                  <img
                    className="rounded-t-lg w-full h-[160px]"
                    src={val?.urlToImage}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {val?.title?.slice(0, 35)}...
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {val?.description?.slice(0, 70)}...
                  </p>
                  <a
                    href={val?.url}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>

        <div className="flex items-center justify-center my-6">
          <Stack spacing={3}>
            <Pagination
              count={Math.ceil(this.state.totalResult / 12)}
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
