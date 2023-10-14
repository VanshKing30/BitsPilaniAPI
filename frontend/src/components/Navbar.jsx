import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
        <div className="space-x-4">
          <Link to="/home" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/menu" className="text-white hover:text-gray-300">
            Menu
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300">
            My Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
