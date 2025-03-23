import React from 'react';

export default function LocationReviews({ reviews = [] }) {
	if (!reviews?.length) {
		return (
			<div className="p-6 text-center text-gray-500">
				<p>Nu există review-uri momentan.</p>
			</div>
		);
	}

	return (
		<div id="reviews-section" className="mt-12 scroll-mt-20 px-4 pt-8 pb-4">
			<div className="border-t pt-8">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-xl font-semibold">Reviews</h2>
					<div className="flex items-center space-x-3">
						<StarRating rating={reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length} />
						<span className="font-semibold">
							{(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)}
						</span>
						<span className="text-gray-500">({reviews.length} reviews)</span>
					</div>
				</div>

				{/* Keyword Cloud */}
				<KeywordCloud keywords={extractKeywords(reviews)} />

				{/* Reviews Grid */}
				<div className="grid grid-cols-1 gap-6">
					{reviews.map((review, index) => (
						<div key={index} className="bg-gray-50 rounded-lg p-4">
							<div className="flex items-center justify-between mb-2">
								<StarRating rating={review.rating} />
								<span className="text-gray-500 text-sm">{review.rating.toFixed(1)}</span>
							</div>
							<p className="text-gray-600">{review.comment}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function KeywordCloud({ keywords }) {
	return (
		<div className="flex flex-wrap gap-2 mb-6">
			{keywords.map(({ word, count, size }) => (
				<span
					key={word}
					className={`
            inline-flex items-center px-3 py-1 rounded-full
            bg-gray-100 text-gray-700 font-medium
            ${size === 1 ? 'text-sm' : size === 2 ? 'text-base' : 'text-lg'}
          `}
					title={`Mentioned ${count} times`}
				>
					{word}
				</span>
			))}
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

function extractKeywords(reviews) {
	const stopWords = new Set([
		'și',
		'în',
		'la',
		'de',
		'pe',
		'cu',
		'pentru',
		'dar',
		'sau',
		'care',
		'este',
		'sunt',
		'fost',
		'a',
		'al',
		'ai',
		'ale',
		'cel',
		'cea',
		'cei',
		'cele',
		'un',
		'o',
		'niște',
		'acest',
		'această',
		'acești',
		'aceste',
		'mai',
		'foarte',
		'mult',
		'mulți',
		'multe',
		'aici',
		'acolo',
		'că',
		'să',
		'din',
		'prin',
		'între',
		'spre',
	]);

	const words = reviews
		.map((review) => review.comment.toLowerCase())
		.join(' ')
		.split(/\s+/)
		.map((word) => word.replace(/[.,!?;:'"()]/g, ''))
		.filter((word) => word.length > 3 && !stopWords.has(word));

	const wordCount = words.reduce((acc, word) => {
		acc[word] = (acc[word] || 0) + 1;
		return acc;
	}, {});

	return Object.entries(wordCount)
		.sort(([, a], [, b]) => b - a)
		.slice(0, 10)
		.map(([word, count]) => ({
			word,
			count,
			size: Math.max(1, Math.min(3, Math.log2(count + 1))),
		}));
}

// Star icon components
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
