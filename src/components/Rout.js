import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Rout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Rout;
