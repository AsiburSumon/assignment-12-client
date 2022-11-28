import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-indigo-500 ... p-3">
      <div className="flex-1">
        <Link to="/" className="btn  normal-case text-2xl">
          Honda-BD
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 text-xl font-serif font-bold text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
