import { Helmet } from 'react-helmet-async';
import ogImage from '../assets/og-v1.png';

export default function SEO({ title, description, image = 'https://mideally.com/default-og.jpg', url }) {
	const siteTitle = 'Mideally - Conectăm clienții cu business-urile';

	return (
		<Helmet>
			{/* Basic metadata */}
			<title>{`${title} | ${siteTitle}`}</title>
			<meta name="description" content={description} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title} | ${siteTitle}`} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={`https://mideally.com/${ogImage}`} />
			{url && <meta property="og:url" content={url} />}

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={`${title} | ${siteTitle}`} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={`https://mideally.com/${ogImage}`} />

			{/* Canonical URL */}
			{url && <link rel="canonical" href={url} />}
		</Helmet>
	);
}
