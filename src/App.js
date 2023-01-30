import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rout from "./components/Rout";
import Home from "./pages/Home";
import Contact from "./pages/Contact.js";
import Technologies from "./pages/Technologies";
import "./App.css";
import About from "./pages/About";
import Bio from "./pages/Bio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout />,
    children: [
      { index: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/about/technologies", element: <Technologies /> },
      { path: "/about/bio", element: <Bio /> },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
