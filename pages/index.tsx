import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Results from "@components/Results";
import requests from "@utils/requests";
import IResults from "@interfaces/results.interfaces";

const Home: NextPage<IResults> = ({ results }) => {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
  const data = await request.json();

  return {
    props: {
      results: data.results,
    },
  };
};
