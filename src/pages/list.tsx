import { Gallery } from "@/sections/gallery";
import { ResortList } from "@/sections/resortList";
import Head from "next/head";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Norwood - List Resort</title>
      </Head>
      <ResortList />
    </main>
  );
}
