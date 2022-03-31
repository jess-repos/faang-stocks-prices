import Head from "next/head";
import StockPrices from "../components/charts/StockPrices";
import Today from "../components/charts/Today";
import Stats from "../components/stats/Stats";
import getData from "../utils/getData";

import fs from "fs";
import path from "path";

const amazon = ({ data, latest, today, info }) => {
  return (
    <>
      <Head>
        <title>FAANG+ | {info.items[0].value}</title>
      </Head>
      <Stats data={info} />
      <StockPrices data={data} />
      <Stats data={latest} />
      <div className="today">
        <Today data={today} />
        <Today data={today} />
      </div>
    </>
  );
};

export function getStaticPaths() {
  const dataDirectory = path.join(process.cwd(), "src", "data");

  const dataFilenames = fs.readdirSync(dataDirectory);
  const slugs = dataFilenames.map((fileName) =>
    fileName.replace(/\.json$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { company: slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { company } = params;
  const props = await getData(`${company}.json`);
  return props;
}

export default amazon;