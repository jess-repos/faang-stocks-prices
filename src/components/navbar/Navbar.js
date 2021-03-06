import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

import classes from "./Navbar.module.css";
import { useNav } from "../../contexts/NavProvider";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { links, company } = useNav();

  return (
    <>
      {isNavOpen && (
        <div
          className={classes.overlay}
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
      <div className={classes.navbar}>
        <Link href={"/"}>
          <h1>FAANG+</h1>
        </Link>
        <div className={classes.action}>
          {company && (
            <>
              <h2>{convertTitle(company)}</h2>
              <span>|</span>
            </>
          )}
          <GiHamburgerMenu
            size={"2rem"}
            onClick={() => setIsNavOpen((prev) => !prev)}
          />
        </div>
        <div className={`${classes.panel} ${isNavOpen && classes.open}`}>
          <ul className={classes.links} onClick={() => setIsNavOpen(false)}>
            <Link href="/">Home</Link>

            {links.map((item, index) => (
              <Link key={index} href={`/${item}`}>
                {convertTitle(item)}
              </Link>
            ))}
          </ul>
          <p>© Mark Christian Albinto @2022</p>
        </div>
      </div>
    </>
  );
};

const convertTitle = (title) => {
  const splitted = title.split("-");
  const capitalized = splitted.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );
  const joined = capitalized.join(" ");
  return joined;
};

export default Navbar;
