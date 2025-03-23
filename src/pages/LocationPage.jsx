import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import companiesData from '../data/companies.json';
import { Navigate } from 'react-router-dom';
import LocationHero from '../components/companies/LocationHero';
import LocationDetails from '../components/companies/LocationDetails';
import LocationReviews from '../components/companies/LocationReviews';
import LocationDiscounts from '../components/companies/LocationDiscounts';
import LocationProducts from '../components/companies/LocationProducts';
import Tabs from '../components/common/Tabs';
import LocationMap from '../components/companies/LocationMap';

export default function LocationPage() {
	const { citySlug, id } = useParams();
	const location = useLocation();
	const [activeTab, setActiveTab] = useState('details');

	// Find the company that matches both city and ID
	const company = companiesData.find(
		(c) => c.id === parseInt(id) && c.location.citySlug.toLowerCase() === citySlug.toLowerCase()
	);

	// Handle reviews scroll from location state
	useEffect(() => {
		if (location.state?.scrollToReviews) {
			setActiveTab('reviews');
		}
	}, [location.state]);

	// If no company is found, redirect to home page
	if (!company) {
		return <Navigate to="/" replace />;
	}

	const tabs = [
		{ id: 'details', label: 'Details' },
		{ id: 'products', label: 'Products' },
		{ id: 'reviews', label: 'Reviews' },
	];

	const handleReviewsClick = () => {
		setActiveTab('reviews');
		// Smooth scroll to the tabs section
		const tabsSection = document.querySelector('[aria-label="Tabs"]');
		if (tabsSection) {
			tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="bg-white shadow-lg rounded-lg overflow-hidden">
				<LocationHero company={company} onReviewsClick={handleReviewsClick} />
				<LocationDiscounts vouchers={company.vouchers} />

				{company.location.coordinates && (
					<LocationMap coordinates={company.location.coordinates} address={company.location.address} />
				)}

				<Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

				<div className="mt-6">
					{activeTab === 'details' && <LocationDetails company={company} />}
					{activeTab === 'products' && <LocationProducts products={company.products} />}
					{activeTab === 'reviews' && <LocationReviews reviews={company.reviews} />}
				</div>
			</div>
		</div>
	);
}
