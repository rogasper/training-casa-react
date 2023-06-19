import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<Hero />
			<Places />
		</main>
	);
}
