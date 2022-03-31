import Head from "next/head";
import StockPrices from "../components/charts/StockPrices";
import Today from "../components/charts/Today";
import Stats from "../components/stats/Stats";
import getData from "../utils/getData";

const facebook = ({ data, latest, today, info }) => {
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

export async function getStaticProps(context) {
  const props = await getData("facebook.json");
  return props;
}

export default facebook;
