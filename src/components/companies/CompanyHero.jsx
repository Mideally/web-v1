import React from 'react';

export default function CompanyHero({ company }) {
	return (
		<div className="relative h-64 sm:h-80 lg:h-96">
			<img
				src={company.branding.featuredImage}
				alt={company.companyDetails.name}
				className="w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/0"></div>
			<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
				<div className="flex items-center space-x-4">
					<img
						src={company.branding.logo}
						alt={`${company.companyDetails.name} logo`}
						className="w-16 h-16 rounded-full border-2 border-white"
					/>
					<div>
						<h1 className="text-2xl font-bold">{company.companyDetails.name}</h1>
						<p className="text-sm opacity-90">
							{company.location.address}, {company.location.city}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
