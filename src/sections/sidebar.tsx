import Link from 'next/link';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

export const Sidebar = () => {
	return (
		<div>
			<h3 className="font-bold mb-6">COUNTRIES</h3>
			<div className="flex flex-col gap-4">
				{COUNTRY_LIST.map((country) => (
					<Link
						key={country.slug}
						href={`/list?country=${country.slug}`}
						className="hover:underline"
					>
						- {country.name}
					</Link>
				))}
			</div>
		</div>
	);
};
