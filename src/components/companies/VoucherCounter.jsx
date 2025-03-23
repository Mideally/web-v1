import React from 'react';

export default function VoucherCounter({ count }) {
	const isLowStock = count <= 10; // Consider "low stock" when 10 or fewer remain

	return (
		<div
			className={`
      inline-flex items-center gap-2 px-3 py-1.5 rounded-full
      ${isLowStock ? 'bg-amber-50 border border-amber-100' : 'bg-green-50 border border-green-100'}
    `}
		>
			<div
				className={`
        w-2 h-2 rounded-full animate-pulse
        ${isLowStock ? 'bg-amber-500' : 'bg-green-500'}
      `}
			/>
			<span
				className={`
        text-sm font-medium
        ${isLowStock ? 'text-amber-600' : 'text-green-600'}
      `}
			>
				{isLowStock ? 'Doar' : ''} {count} {count === 1 ? 'reducere' : 'reduceri'}{' '}
				{isLowStock ? 'rămase' : 'disponibile'}
			</span>
		</div>
	);
}
