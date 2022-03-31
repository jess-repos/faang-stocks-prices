import React from "react";

import classes from "./Stats.module.css";

const Stats = ({ data }) => {
  return (
    <div className={classes.stats}>
      {data.title && <h2>{data.title}</h2>}
      <div className={classes.grid}>
        {data.items.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.value}</h1>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
