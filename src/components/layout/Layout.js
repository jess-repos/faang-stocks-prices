import React from "react";
import NavProvider from "../../contexts/NavProvider";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <Navbar />
      <main>{children}</main>
    </NavProvider>
  );
};

export default Layout;
