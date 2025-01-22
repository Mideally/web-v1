export default function SectionHeader({ title, subtitle, supraTitle, className }) {
	return (
		<div className={`flex flex-col gap-2 mb-8 ${className}`}>
			{supraTitle && <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">{supraTitle}</p>}
			{title && (
				<h4 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">{title}</h4>
			)}
			{subtitle && (
				<p className="text-lg font-light leading-8 text-gray-900 sm:text-2xl sm:leading-9">{subtitle}</p>
			)}
		</div>
	);
}
