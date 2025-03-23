import React from 'react';

export default function LocationProducts({ products }) {
	if (!products?.length) return null;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
			{products.map((product) => (
				<div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
					<img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
					<div className="p-4">
						<h3 className="font-semibold text-gray-900">{product.title}</h3>
						<p className="text-sm text-gray-600 mt-1">{product.description}</p>
						<div className="mt-4">
							<span className="text-lg font-bold text-pink-600">{product.price} RON</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
