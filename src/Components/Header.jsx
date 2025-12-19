import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-mono flex justify-between items-center bg-black px-8 py-4">
      {/* Logo */}
      <h1
        className="text-yellow-500 font-bold text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        MovieMate
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-x-10 text-lg font-bold text-yellow-500">
        <li>
          <Link to="/" className="hover:text-white">HOME</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white">ABOUT</Link>
        </li>
        <li>
          <Link to="/watchlist" className="hover:text-white">WATCHLIST</Link>
        </li>
      </ul>

      {/* Login Button */}
      <div className="flex gap-4">
      <button
        onClick={() => navigate("/login")}
        className="text-red-500 font-bold hover:text-white transition-colors"
      >
        LOGIN
      </button>
         <button
        onClick={() => navigate("/signup")}
        className="text-red-500 font-bold hover:text-white transition-colors"
      >
        SIGNUP
      </button>
      </div>
    </header>
  );
};

export default Header;