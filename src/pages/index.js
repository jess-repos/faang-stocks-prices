import { useEffect } from "react";
import Head from "next/head";
import { useNav } from "../contexts/NavProvider";
import getSlugs from "../utils/getSlugs";
import Main from "../components/Main";

export default function Home({ links }) {
  return (
    <>
      <Head>
        <title>FAANG+</title>
      </Head>
      <Main links={links}></Main>
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
