import React from 'react';

export default function CompanyDetails({ company }) {
	return (
		<div className="p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h2 className="text-xl font-semibold mb-4">Despre noi</h2>
					<p className="text-gray-600 mb-6">{company.companyDetails.description}</p>

					<h2 className="text-xl font-semibold mb-4">Program</h2>
					<p className="text-gray-600">
						{company.operatingHours?.days}: {company.operatingHours?.hours}
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold mb-4">Contact</h2>
					<div className="space-y-2">
						<ContactItem icon={<PhoneIcon />} text={company.contact?.phone} />
						<ContactItem icon={<EmailIcon />} text={company.contact?.email} />
						<ContactItem icon={<LocationIcon />} text={company.location.address} />
					</div>
				</div>
			</div>
		</div>
	);
}

function ContactItem({ icon, text }) {
	return (
		<p className="flex items-center text-gray-600">
			<span className="w-5 h-5 mr-2">{icon}</span>
			{text}
		</p>
	);
}

function PhoneIcon() {
	return (
		<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		</svg>
	);
}

function EmailIcon() {
	return (
		<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		</svg>
	);
}

function LocationIcon() {
	return (
		<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
