import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = (event) => {
    event.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-transparent absolute z-20 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between lg:py-4 md:py-8 py-12">
          <button
            className="text-custom-brown focus:outline-none lg:hidden"
            onClick={toggleNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <div
            className={`lg:flex lg:flex-grow px-5 lg:justify-start lg:items-center ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5 text-primary-color text-sm">
              <li>
                <Link to="/" className="hover:text-custom-brown ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-custom-brown ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ourArtists" className="hover:text-custom-brown ">
                  Our Artists
                </Link>
              </li>
              <li>
                <Link to="/whereToBy" className="hover:text-custom-brown ">
                  Where to Buy
                </Link>
              </li>
              <li>
                <Link to="./Blog/Page" className="hover:text-custom-brown ">
                  Blog
                </Link>
              </li>
            </ul>

            <div className="lg:flex lg:flex-grow lg:items-center lg:justify-end ">
              <ul className="flex space-x-4flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5 text-primary-color text-sm">
                <li>
                  <Link
                    to="./artistSubmissions"
                    className="hover:text-custom-brown"
                  >
                    Artist Submissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="./tradeEnquiries"
                    className="hover:text-custom-brown mr-5"
                  >
                    Trade Enquiries
                  </Link>
                </li>
              </ul>

              <Button className="bg-custom-brown  text-primary-color text-sm p-2" label="Arthub Login">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
