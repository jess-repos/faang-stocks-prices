import React from "react";
import NavProvider from "../../contexts/NavProvider";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <main>{children}</main>
      <Navbar />
    </NavProvider>
  );
};

export default Layout;
