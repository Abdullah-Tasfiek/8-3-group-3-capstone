import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/NavBar.css";

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
      <div className="nav">
        <div
          style={{ position: "sticky", top: 0 }}
          className="flex items-center justify-between text-white font-fonts"
        >
          {/* Logo */}
          <Link className="text-5xl p-4 font-medium " to="/">
            <h2 className="drop-shadow-2xl">Table For Two</h2>
          </Link>
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
          <Link className="p-4">
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
                <Link
                  to="/signin"
                  class="bg-white hover:bg-grey-300 text-black font-fonts py-4 px-10 mx-10 rounded-full text-lg font-medium"
                >
                  Log In
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
      <div>
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
      </div>
    </nav>
  );
};

export default NavBar;
