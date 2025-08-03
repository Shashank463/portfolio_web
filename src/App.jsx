import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

console.log("DARK MODE:", darkmode);


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          darkmode={darkmode}
          toggleDarkMode={() => setDarkmode(!darkmode)}
        />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <div className={darkmode ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
