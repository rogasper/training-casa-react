import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Page() {
	const router = useRouter();
	const countryName = router.query.countryName as string;
	return (
		<main>
			<h1 className="text-4xl mx-auto w-fit mb-8">
				Country page {countryName}
			</h1>
			<Image
				src={generateRandomImg(countryName)}
				alt={countryName}
				width={1440}
				height={900}
			/>
			<Image
				src={generateRandomImg(countryName, 2)}
				alt={countryName}
				width={1440}
				height={900}
			/>
			<Image
				src={generateRandomImg(countryName, 3)}
				alt={countryName}
				width={1440}
				height={900}
			/>
		</main>
	);
}
