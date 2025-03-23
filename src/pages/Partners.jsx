import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import companiesData from '../data/companies.json';
import Section from '../components/reusable/Section';
import PageHeader from '../components/reusable/PageHeader';
import CityFilter from '../components/companies/CityFilter';
import CompanyGrid from '../components/companies/PartnersGrid';

export default function Partners() {
	const { citySlug } = useParams();
	const navigate = useNavigate();
	const [visibleCompanies, setVisibleCompanies] = useState(12);
	const [selectedCity, setSelectedCity] = useState(citySlug || '');

	// Get unique cities with both name and slug
	const cities = [
		...new Set(
			companiesData.map((company) => ({
				name: company.location.city,
				slug: company.location.citySlug,
			}))
		),
	];

	// Remove duplicates based on slug
	const uniqueCities = cities.filter((city, index, self) => index === self.findIndex((c) => c.slug === city.slug));

	// Filter companies based on selected city
	const filteredCompanies = companiesData.filter((company) =>
		selectedCity ? company.location.citySlug === selectedCity : true
	);

	// Handle city filter change
	const handleCityChange = (citySlug) => {
		setSelectedCity(citySlug);
		setVisibleCompanies(12); // Reset pagination when changing filter

		if (citySlug) {
			navigate(`/parteneri/${citySlug}`);
		} else {
			navigate('/parteneri');
		}
	};

	// Load more companies
	const handleLoadMore = () => {
		setVisibleCompanies((prev) => prev + 12);
	};

	// Update selected city when URL changes
	useEffect(() => {
		setSelectedCity(citySlug || '');
	}, [citySlug]);

	return (
		<Section>
			<PageHeader
				title="Partenerii noștri"
				subtitle="Descoperiți partenerii noștri din toată țara"
				className="text-center mt-8 lg:mt-16"
			/>

			<CityFilter cities={uniqueCities} selectedCity={selectedCity} onCityChange={handleCityChange} />

			<CompanyGrid companies={filteredCompanies} visibleCount={visibleCompanies} onLoadMore={handleLoadMore} />
		</Section>
	);
}
