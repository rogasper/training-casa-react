import { Inter } from "next/font/google";
import { Hero } from "@/sections/hero";
import { Places } from "@/sections/places";
import { COUNTRY_LIST } from "../../DATA/COUNTRY_LIST";
import Head from "next/head";
import { getCountriesFromDb } from "@/queries/getCountries";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ countryList }: any) {
  // *****
  // TODO:
  // 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"

  // *****
  return (
    <main>
      <Head>
        <title>Norwood - The Resorts</title>
      </Head>
      <Hero />
      <Places countryList={countryList} />
    </main>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch(
  //   "https://the-best-resort.vercel.app/api/resort/countries/"
  // );
  const res = await getCountriesFromDb();

  return {
    props: {
      countryList: res,
    },
  };
};
