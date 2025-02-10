import React from 'react';
import { Link } from 'react-router-dom';

export default function CompanyCard({ company }) {
	return (
		<Link
			to={`/parteneri/${company.location.citySlug}/${company.id}`}
			className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
		>
			<div className="aspect-video relative overflow-hidden">
				<img
					src={company.branding.featuredImage}
					alt={company.companyDetails.name}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/0"></div>
				<div className="absolute bottom-0 left-0 right-0 p-4">
					<div className="flex items-center space-x-3">
						<img
							src={company.branding.logo}
							alt={`${company.companyDetails.name} logo`}
							className="w-12 h-12 rounded-full border-2 border-white"
						/>
						<div className="text-white">
							<h3 className="font-semibold">{company.companyDetails.name}</h3>
							<p className="text-sm opacity-90">{company.location.city}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="p-4">
				<p className="text-gray-600 line-clamp-2">{company.companyDetails.description}</p>
			</div>
		</Link>
	);
}
