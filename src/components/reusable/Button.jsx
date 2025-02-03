import React from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

export default function Button({ children, onClick, disabled, color, size, className, loading }) {
	const buttonClasses = `inline-flex items-center px-8 border border-transparent font-medium rounded-md text-white transition-colors duration-200 ease-in-out shadow-sm w-fit ${
		color === 'pink' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-indigo-500 hover:bg-indigo-600'
	} ${size === 'small' ? 'px-4 py-0 min-h-[42px] text-sm' : 'py-3 text-base'} ${
		disabled ? 'opacity-50 cursor-not-allowed' : ''
	} ${className}`;

	// If children is a Link component, wrap it to make the entire area clickable
	if (React.isValidElement(children) && children.type === Link) {
		return React.cloneElement(children, {
			className: buttonClasses,
			children: (
				<>
					{loading && <Spinner buttonColour={color === 'pink' ? 'pink' : 'indigo'} className="mr-2" />}
					{children.props.children}
				</>
			),
		});
	}

	return (
		<button className={buttonClasses} onClick={onClick} disabled={disabled}>
			{loading && <Spinner buttonColour={color === 'pink' ? 'pink' : 'indigo'} className="mr-2" />}
			{children}
		</button>
	);
}
