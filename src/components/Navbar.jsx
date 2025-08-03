import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkmode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="p-5 flex items-center justify-between">
        <div className="text-3xl text-white font-bold">
          <h1>Shashank Kashyap</h1>
        </div>

        <div className="md:hidden">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-bold">
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <button
            className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            onClick={toggleDarkMode}
          >
            {darkmode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-5 pb-4 space-y-2 text-white font-bold bg-gray-800">
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-600" : "")}
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <button
            className="mt-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            onClick={() => {
              toggleDarkMode();
              setIsOpen(false);
            }}
          >
            {darkmode ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
