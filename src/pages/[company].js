import Head from "next/head";
import StockPrices from "../components/charts/StockPrices";
import Today from "../components/charts/Today";
import Stats from "../components/stats/Stats";
import getData from "../utils/getData";
import getSlugs from "../utils/getSlugs";
import Main from "../components/Main";
import Yesterday from "../components/charts/Yesterday";

const Company = ({ data, latest, today, yesterday, info, links, company }) => {
  return (
    <>
      <Head>
        <title>FAANG+ | {info.items[0].value}</title>
      </Head>
      <Main links={links} company={company}>
        <Stats data={info} />
        <StockPrices data={data} />
        <Stats data={latest} />
        <div className="today">
          <Today data={today} />
          <Yesterday data={yesterday} />
        </div>
      </Main>
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
  return {
    props: { ...props, company },
    revalidate: 600,
  };
}

export default Company;
