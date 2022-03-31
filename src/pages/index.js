import { useEffect } from "react";
import Head from "next/head";
import { useNav } from "../contexts/NavProvider";
import getSlugs from "../utils/getSlugs";

export default function Home({ links }) {
  const { linksHandler } = useNav();
  useEffect(() => {
    linksHandler(links);
  }, []);

  return (
    <>
      <Head>
        <title>FAANG+</title>
      </Head>
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
