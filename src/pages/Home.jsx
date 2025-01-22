import React from 'react';
import SEO from '../components/SEO';
import HomepageHero from '../components/HomepageHero';
import HomepageFeatures from '../components/HomepageFeatures';
import BusinessTools from '../components/BusinessTools';

const Home = () => {
	return (
		<>
			<SEO title="Acasă" description="Acasă" />
			<HomepageHero />
			<HomepageFeatures />
			<BusinessTools />
		</>
	);
};

export default Home;
