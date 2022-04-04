import React, { createContext, useContext, useState } from "react";

const navContext = createContext();

export const useNav = () => useContext(navContext);

const NavProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [company, setCompany] = useState("");

  const linksHandler = (items) => {
    setLinks(items);
  };
  const companyHandler = (item) => {
    setCompany(item);
  };

  return (
    <navContext.Provider
      value={{ links, linksHandler, company, companyHandler }}
    >
      {children}
    </navContext.Provider>
  );
};

export default NavProvider;
