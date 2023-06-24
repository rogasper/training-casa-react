import prisma from "../lib/prisma";

export const getCountriesFromDb = async () => {
  const countries = await prisma.country.findMany();
  return countries;
};

// export const createCountries = async (namecountry: string) => {
//   const newCountry = await prisma.country.create({
//     data: {
//       name: namecountry,
//       slug: namecountry.toUpperCase(),
//       image_url: `https://source.unsplash.com/random/1470%C3%9780/?${namecountry}`,
//     },
//   });

//   return newCountry;
// };
