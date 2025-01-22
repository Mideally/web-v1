import React from 'react';

export default function Button({ children, onClick, disabled, color, size, className }) {
	return (
		<button
			className={`inline-flex items-center px-8 py-3 border border-transparent font-medium rounded-md text-white transition-colors duration-200 ease-in-out shadow-sm w-fit ${
				color === 'pink' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-indigo-500 hover:bg-indigo-600'
			} ${size === 'small' ? 'px-4 py-0 min-h-[42px] text-sm' : 'text-base'} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
