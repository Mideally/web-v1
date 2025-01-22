import Section from './reusable/Section';

export default function Footer() {
	return (
		<footer className="bg-gray-100">
			<Section className="py-8">
				<p className="text-center text-gray-500">
					© {new Date().getFullYear()} Mideally. Toate drepturile rezervate.
				</p>
			</Section>
		</footer>
	);
}
