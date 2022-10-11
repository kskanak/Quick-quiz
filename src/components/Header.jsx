import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header md:flex justify-between items-center px-24 py-5 bg-slate-900 text-white">
      <Link to="/">
        <h2 className="title text-2xl text-sky-400 font-semibold my-2 md:my-2 text-center">
          Quick <span className="text-green-400">Quiz</span>
        </h2>
      </Link>

      <nav className="navItem text-xl  flex justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeClassName" : undefined
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeClassName" : undefined
          }
          to="/topics"
        >
          Topics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeClassName" : undefined
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeClassName" : undefined
          }
          to="/Blog"
        >
          Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
