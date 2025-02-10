import React from 'react';

export default function CityFilter({ cities, selectedCity, onCityChange }) {
	return (
		<div className="flex flex-wrap justify-center gap-2 mb-8">
			<button
				onClick={() => onCityChange('')}
				className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
					selectedCity === '' ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
				}`}
			>
				Toate orașele
			</button>
			{cities.map((city) => (
				<button
					key={city.slug}
					onClick={() => onCityChange(city.slug)}
					className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
						selectedCity === city.slug
							? 'bg-pink-600 text-white'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
					}`}
				>
					{city.name}
				</button>
			))}
		</div>
	);
}
