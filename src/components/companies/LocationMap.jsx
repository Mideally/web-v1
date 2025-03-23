import React from 'react';
import Map from '../reusable/Map';

export default function LocationMap({ coordinates, address }) {
	return (
		<div className="p-6 border-b border-gray-200">
			<h2 className="text-xl font-semibold mb-4">Locație</h2>
			<div className="flex items-start space-x-2 mb-4 text-gray-600">
				<LocationIcon />
				<span>{address}</span>
			</div>
			<Map lat={coordinates.lat} lng={coordinates.lng} />
		</div>
	);
}

function LocationIcon() {
	return (
		<svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
			/>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
		</svg>
	);
}
