import React from 'react';
import CountdownTimer from './CountdownTimer';
import VoucherCounter from './VoucherCounter';

export default function LocationDiscounts({ vouchers }) {
	if (!vouchers?.active?.length) return null;

	return (
		<div className="space-y-4 px-4 py-4">
			{vouchers.active.map((voucher, index) => (
				<div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
					{/* Discount Label */}
					<div className="flex items-center justify-between p-4">
						<div className="flex items-center gap-4">
							<div className="flex flex-col items-center justify-center w-16 h-16 bg-pink-100 rounded-lg">
								<span className="text-2xl font-bold text-pink-600">{voucher.discount}%</span>
								<span className="text-xs text-pink-500 uppercase">OFF</span>
							</div>

							<div>
								<h3 className="font-semibold text-gray-900">{voucher.title}</h3>
								<p className="text-sm text-gray-600">{voucher.description}</p>
								{/* Status indicators */}
								<div className="mt-3 flex flex-wrap gap-2">
									{voucher.type === 'timeLimited' && <CountdownTimer validTo={voucher.validTo} />}
									{voucher.count && <VoucherCounter count={voucher.count} />}
								</div>
							</div>
						</div>

						<button
							className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
							onClick={() => navigator.clipboard.writeText(voucher.code)}
						>
							Folosește reducerea
						</button>
					</div>

					{/* Footer with additional info */}
					<div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
						<div className="flex items-center gap-2 text-sm text-gray-500">
							<span className="font-medium">Code:</span>
							<span className="font-mono">{voucher.code}</span>
						</div>

						{/* Show dates for non-timeLimited vouchers */}
						{voucher.validTo && voucher.type !== 'timeLimited' && (
							<span className="text-sm text-gray-500">
								Expires: {new Date(voucher.validTo).toLocaleDateString()}
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
