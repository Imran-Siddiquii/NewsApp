import React, { Component } from "react";
import Logo from "./Images/Logo.png";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navbar: false,
    };
  }
  render() {
    return (
      <>
        <nav className="w-full bg-cyan-400 shadow sticky top-0 z-30 mb-5">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link
                  to="/"
                  className="flex items-center lg:justify-items-center"
                >
                  <img
                    src={Logo}
                    className="h-6 mr-3 sm:h-9"
                    alt="Fearless news"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Fearless News
                  </span>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() =>
                      this.setState({ navbar: !this.state.navbar })
                    }
                  >
                    {this.state.navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  this.state.navbar ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 items-center dark:border-gray-700">
                  <li>
                    <Link
                      to="/business"
                      className="block py-2 pl-3 pr-4 rounded text-gray-700 md:bg-transparent dark:text-gray-400 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/entertainment"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/general"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/health"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/science"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sports"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/technology"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
