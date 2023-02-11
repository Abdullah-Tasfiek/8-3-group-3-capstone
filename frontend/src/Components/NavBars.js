import { Link, useNavigate } from "react-router-dom";
import React from "react";

const NavBar = ({ loggedIn, logOut }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <nav>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link className="hover:text-red-800" to="/">
          <h2>Table For Two</h2>
        </Link>
        {/* Navbar Routes*/}
        <div className="hidden md:flex space-x-40 pr-30 text-2xl">
          <div className={"space-x-40 " + (loggedIn ? "show" : "hidden")}>
            <Link className="hover:text-red-800" to="/users">
              <button>
                <div>
                  <h2>Explore</h2>
                </div>
              </button>
            </Link>
            <Link className="hover:text-red-800" to="/matches">
              <button>
                <div>
                  <h2>Matches</h2>
                </div>
              </button>
            </Link>
            <Link className="hover:text-red-800" to="/myprofile">
              <button>
                <div>
                  <h2>Profile</h2>
                </div>
              </button>
            </Link>
          </div>
          <Link className="hover:text-red-800">
            <button>
              {loggedIn ? (
                <Link to="/signin">
                  <div
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Log Out
                  </div>
                </Link>
              ) : (
                <Link to="/signin">
                  <h2>Log In</h2>
                </Link>
              )}
            </button>
          </Link>
        </div>
        {/* Hamburger Icon */}
        <button
          onClick={handleClick}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none p-1"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 bg-green sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="/users" className="text-logored">
            Explore
          </a>
          <a href="/matches" className="text-logored">
            Matches
          </a>
          <a href="/myprofile" className="text-logored">
            My Profile
          </a>
          <a href="/" className="text-logored">
            {loggedIn ? "Sign Out" : "Sign In"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
