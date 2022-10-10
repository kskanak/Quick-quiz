import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header md:flex justify-between items-center px-24 py-5 bg-slate-700 text-white">
      <Link to="/">
        <div className="title text-xl md:text-2xl font-semibold my-2 md:my-2 text-center">
          Quick Quiz
        </div>
      </Link>

      <nav className="navItem text-xl md:text-2xl text-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700 font-semibold" : undefined
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
