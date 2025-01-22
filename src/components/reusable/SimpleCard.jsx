import { Link } from 'react-router-dom';
import Button from './Button';

export default function SimpleCard({ image, title, description, link, linkText, supraTitle }) {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
			<div className="py-5">
				{supraTitle && <p className="text-sm text-gray-500 px-5">{supraTitle}</p>}
				<h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 px-5">{title}</h5>
				<img className="" src={image} alt="" />

				<div className="font-normal text-gray-700 px-5 mt-5">{description}</div>
				{link && (
					<Link to={link} className="px-5 mt-5">
						<Button color="pink" size={'small'}>
							{linkText}
							<svg
								className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
