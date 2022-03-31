import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {isNavOpen && (
        <div
          className={classes.overlay}
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
      <div className={classes.navbar}>
        <GiHamburgerMenu
          size={"2rem"}
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
        <h1>FAANG+</h1>
        <span />
        <div className={`${classes.panel} ${isNavOpen && classes.open}`}>
          <ul className={classes.links} onClick={() => setIsNavOpen(false)}>
            <Link href="/">Home</Link>
            <Link href="/facebook">Facebook</Link>
            <Link href="/apple">Apple</Link>
            <Link href="/amazon">Amazon</Link>
            <Link href="/netflix">Netflix</Link>
            <Link href="/google">Google</Link>
            <Link href="/tesla" onClick={() => setIsNavOpen(false)}>
              Tesla
            </Link>
            <Link href="/microsoft" onClick={() => setIsNavOpen(false)}>
              Microsoft
            </Link>
          </ul>
          <p>© Mark Christian Albinto @2022</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
