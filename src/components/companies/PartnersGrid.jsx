import React from 'react';
import CompanyCard from './LocationCard';
import Button from '../reusable/Button';

export default function CompanyGrid({ companies, visibleCount, onLoadMore }) {
	const visibleCompanies = companies.slice(0, visibleCount);

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{visibleCompanies.map((company) => (
					<CompanyCard key={company.id} company={company} />
				))}
			</div>

			{companies.length > visibleCount && (
				<div className="mb-8 text-center">
					<Button onClick={onLoadMore}>Încarcă mai multe</Button>
				</div>
			)}

			{companies.length === 0 && (
				<div className="text-center py-12">
					<p className="text-gray-600">Nu am găsit parteneri în acest oraș.</p>
				</div>
			)}
		</>
	);
}
