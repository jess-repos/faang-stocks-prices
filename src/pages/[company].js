import Head from "next/head";
import StockPrices from "../components/charts/StockPrices";
import Today from "../components/charts/Today";
import Navbar from "../components/navbar/Navbar";
import Stats from "../components/stats/Stats";
import getData from "../utils/getData";
import getSlugs from "../utils/getSlugs";

const amazon = ({ data, latest, today, info, links }) => {
  return (
    <>
      <Head>
        <title>FAANG+ | {info.items[0].value}</title>
      </Head>
      <Navbar links={links} />
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
  const slugs = getSlugs();
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
