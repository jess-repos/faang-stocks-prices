import React, { createContext, useContext, useState } from "react";

const navContext = createContext();

export const useNav = () => useContext(navContext);

const NavProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const linksHandler = (items) => {
    setLinks(items);
  };

  return (
    <navContext.Provider value={{ links, linksHandler }}>
      {children}
    </navContext.Provider>
  );
};

export default NavProvider;
