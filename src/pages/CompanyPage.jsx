import React from 'react';
import { useParams } from 'react-router-dom';
import companiesData from '../data/companies.json';
import { Navigate } from 'react-router-dom';
import CompanyHero from '../components/companies/CompanyHero';
import CompanyDetails from '../components/companies/CompanyDetails';

export default function CompanyPage() {
	const { citySlug, id } = useParams();

	// Find the company that matches both city and ID
	const company = companiesData.find(
		(c) => c.id === parseInt(id) && c.location.citySlug.toLowerCase() === citySlug.toLowerCase()
	);

	// If no company is found, redirect to home page
	if (!company) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="bg-white shadow-lg rounded-lg overflow-hidden">
				<CompanyHero company={company} />
				<CompanyDetails company={company} />
			</div>
		</div>
	);
}
