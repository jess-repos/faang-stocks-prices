import React from "react";
import Link from "next/link";

const Datasets = ({ links }) => {
  return (
    <div>
      <h3>Datasets</h3>
      <ul className="hotlinks">
        {links.map((item, index) => (
          <Link href={`/datasets/${item}.json`} key={index}>
            <a target="_blank">
              <li>{item}.json</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Datasets;
