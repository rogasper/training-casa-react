import { generateRandomImg } from "@/lib/generateRandomImg";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { RESORT_LIST } from "../../../DATA/RESORT_LIST";

export default function Page({ data }: any) {
  // *****
  // TODO:
  // 1. please change how to get the resort data using Server Side Rendering (SSR) according to the url slug from "/api/resort/detail/slug"
  //   const data = RESORT_LIST[0];
  // *****
  return (
    <main>
      <Head>
        <title>Norwood - {data.resort_name}</title>
      </Head>
      <Image
        src={data.image_url}
        alt={data.resort_name}
        width={1440}
        height={900}
        className="w-full max-h-[70vh] object-cover"
      />
      <div className="text-center max-w-[1200px] mx-auto my-40">
        <h1 className="mx-auto mb-8 text-4xl w-fit">{data.resort_name}</h1>
        <p>{data.resort_description}</p>
      </div>
    </main>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const { slug } = params;
  console.log(slug);

  const res = await fetch(
    `https://the-best-resort.vercel.app/api/resort/detail/${slug}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
