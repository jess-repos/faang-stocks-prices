import { useEffect } from "react";
import { useNav } from "../contexts/NavProvider";
const Main = ({ children, links, company }) => {
  const { linksHandler, companyHandler } = useNav();
  useEffect(() => {
    linksHandler(links);
    companyHandler(company);
  }, [company]);
  return <>{children}</>;
};

export default Main;
