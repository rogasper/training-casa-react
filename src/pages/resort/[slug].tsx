import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RESORT_LIST } from '../../../DATA/RESORT_LIST';

export default function Page() {
	const data = RESORT_LIST[0];

	const router = useRouter();
	const countryName = router.query.countryName as string;
	return (
		<main>
			<Image
				src={data.image_url}
				alt={countryName}
				width={1440}
				height={900}
				className="w-full max-h-[70vh] object-cover"
			/>
			<div className="text-center max-w-[1200px] mx-auto my-40">
				<h1 className="text-4xl mx-auto w-fit mb-8">
					{data.resort_name}
				</h1>
				<p>{data.resort_description}</p>
			</div>
		</main>
	);
}
