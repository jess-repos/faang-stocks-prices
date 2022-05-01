import { useEffect } from "react";
import Head from "next/head";
import { useNav } from "../contexts/NavProvider";
import getSlugs from "../utils/getSlugs";
import Main from "../components/Main";
import Datasets from "../components/report/Datasets";
import HotLinks from "../components/report/HotLinks";
import Report from "../components/report/Report";

export default function Home({ links }) {
  return (
    <>
      <Head>
        <title>FAANG+</title>
      </Head>
      <Main links={links}>
        <Report />
        <HotLinks links={links} />
        <Datasets links={links} />
      </Main>
    </>
  );
}
export async function getStaticProps(context) {
  const links = getSlugs();
  return {
    props: { links },
    revalidate: 600,
  };
}
