// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";

function makeid(length: any) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") res.status(405).end();
  const data = req.body;
  const country = await prisma.country.create({
    data: {
      name: data.country,
      slug: makeid(5),
      image_url: `https://source.unsplash.com/random/1470%C3%9780/?${data.name}`,
    },
  });

  res.status(200).json(country);
}
