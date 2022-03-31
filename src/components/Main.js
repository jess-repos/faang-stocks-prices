import { useEffect } from "react";
import { useNav } from "../contexts/NavProvider";
const Main = ({ children, links }) => {
  const { linksHandler } = useNav();
  useEffect(() => {
    linksHandler(links);
  }, []);
  return <>{children}</>;
};

export default Main;
