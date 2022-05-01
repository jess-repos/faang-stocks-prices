import React from "react";
import Link from "next/link";

import classes from "./Report.module.css";

const Report = () => {
  return (
    <div className={classes.report}>
      <h2>Note</h2>
      This application is a demonstration of consuming a third party API and
      visualize data to charts. This application will be upgraded in the future
      to properly visualize updated data from the API. The data for this
      demonstration was taken on 28th of March, 2022.
      <br />
      <br />
      <b>
        <u>
          Please click on one of the hotlinks below or through the navigation
          bar on the top right corner for the demonstration.
        </u>
      </b>
      <h3>Sources</h3>
      <Link href="https://marketstack.com">
        <a target="_blank">MarketStack</a>
      </Link>
      <h3>Limitations</h3>
      <p>
        1. API keys are limited to 100 requests per month and to compenstate for
        that, we have scraped the API for the most popular tech companies and
        saved it to a json file to prevent request limit errors (link below is
        the code used to scrape the API).
        <br />
        <Link href="/code/fetcher.txt">
          <a target="_blank">Fetcher (rename to fetcher.js)</a>
        </Link>
        <br />
        2. Data is inconsistent and some dates are missing (image below shows
        that data for 27th of March is missing).
      </p>
      <img src="/images/missing-data.png" alt="Missing Data"></img>
    </div>
  );
};

export default Report;
