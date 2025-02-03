import { Helmet } from 'react-helmet-async';
import ogImage from '../assets/og-v1.png';

export default function SEO({ title, description, url }) {
	const siteTitle = 'Mideally - Conectăm clienții cu business-urile';
	const siteDescription =
		'Mideally va deveni platforma de referință pentru business-urile mici și mijlocii din România. Îți oferim soluții pentru loializare, ofertare și marketing online.';

	return (
		<Helmet>
			{/* Basic metadata */}
			<title>{`${title} | ${siteTitle}`}</title>
			<meta name="description" content={description || siteDescription} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title} | ${siteTitle}`} />
			<meta property="og:description" content={description || siteDescription} />
			<meta property="og:image" content={`https://mideally.com${ogImage}`} />
			{url && <meta property="og:url" content={url} />}

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={`${title} | ${siteTitle}`} />
			<meta name="twitter:description" content={description || siteDescription} />
			<meta name="twitter:image" content={`https://mideally.com${ogImage}`} />

			{/* Canonical URL */}
			{url && <link rel="canonical" href={url} />}
		</Helmet>
	);
}
