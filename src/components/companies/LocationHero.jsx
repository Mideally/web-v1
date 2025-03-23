import React from 'react';
import LocationSubscribers from './LocationSubscribers';

export default function CompanyHero({ company, onReviewsClick }) {
	const handleReviewsClick = () => {
		onReviewsClick();
	};

	// Calculate average rating only if reviews exist
	const averageRating = company.reviews?.length
		? (company.reviews.reduce((acc, review) => acc + review.rating, 0) / company.reviews.length).toFixed(1)
		: 0;

	return (
		<div className="relative h-64 sm:h-80 lg:h-96">
			<img
				src={company.branding.featuredImage}
				alt={company.companyDetails.name}
				className="w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/0"></div>
			<div className="absolute top-0 right-0 p-6">
				<LocationSubscribers initialCount={company.socialProof?.followersCount || 0} />
			</div>
			<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
				<div className="flex items-center justify-between space-x-4">
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

					<button
						onClick={handleReviewsClick}
						className="text-white text-right hover:opacity-80 transition-opacity cursor-pointer"
					>
						<div className="flex items-center space-x-1">
							{company.reviews?.length > 0 ? (
								<>
									<span className="font-semibold">{averageRating}</span>
									<StarRating rating={averageRating} />
								</>
							) : (
								<>
									<StarRating rating={0} />
								</>
							)}
						</div>
						<p className="text-sm opacity-90">
							{company.reviews?.length > 0 ? `${company.reviews.length} recenzii` : 'Nicio recenzie'}
						</p>
					</button>
				</div>
			</div>
		</div>
	);
}

function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;

	return (
		<div className="flex">
			{[...Array(5)].map((_, i) => (
				<span key={i} className="text-yellow-400">
					{i < fullStars ? <StarFull /> : i === fullStars && hasHalfStar ? <StarHalf /> : <StarEmpty />}
				</span>
			))}
		</div>
	);
}

function StarFull() {
	return (
		<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
		</svg>
	);
}

function StarHalf() {
	return (
		<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
			<defs>
				<linearGradient id="half">
					<stop offset="50%" stopColor="currentColor" />
					<stop offset="50%" stopColor="none" stopOpacity="0" />
				</linearGradient>
			</defs>
			<path
				fill="url(#half)"
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
			/>
		</svg>
	);
}

function StarEmpty() {
	return (
		<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
			/>
		</svg>
	);
}
