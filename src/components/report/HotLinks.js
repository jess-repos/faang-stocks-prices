import React from "react";
import Link from "next/link";

const HotLinks = ({ links }) => {
  return (
    <div>
      <h3>HotLinks</h3>
      <ul className="hotlinks">
        {links.map((item, index) => (
          <Link href={`/${item}`} key={index}>
            <a>
              <li>{convertTitle(item)}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
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

export default HotLinks;
