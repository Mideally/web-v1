export default function Section({ children, className, padded }) {
	return (
		<div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${padded ? 'py-16' : ''} ${className}`}>
			{children}
		</div>
	);
}
