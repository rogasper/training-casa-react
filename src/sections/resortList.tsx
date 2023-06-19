import Link from "next/link";
import { RESORT_LIST } from "../../DATA/RESORT_LIST";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ResortList = () => {
  // *****
  // TODO:
  // 1. please change how to get the data using client-side fetching from "/api/resort/list"
  // 2. check if the country parameter and filter the data accordingly

  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/resort/list")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  // const data = RESORT_LIST;
  if (isLoading) return <div>.....Loading</div>;

  // *****
  return (
    <section className="flex justify-between gap-16 p-8">
      <div className="flex-1">
        <h1 className="mb-6 text-4xl font-bold">Resort List</h1>
        <div className="flex flex-col gap-12 w-fit">
          {data === null
            ? ""
            : data.map((resort: any) => (
                <Link
                  key={resort.slug}
                  className="flex items-center justify-between gap-32 p-8 text-xl transition-all rounded-sm shadow-lg hover:bg-slate-200"
                  href={`/resort/${resort.slug}`}
                >
                  {resort.resort_name}
                  <Image
                    src={resort.image_url}
                    alt={resort.resort_name}
                    width={520}
                    height={300}
                    className="object-cover h-32 w-60"
                  />
                </Link>
              ))}
        </div>
      </div>
      <Sidebar />
    </section>
  );
};
