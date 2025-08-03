import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ darkmode, toggleDarkMode }) => {
  return (
    <div className={darkmode ? "dark" : ""}>
      <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
