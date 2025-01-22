import React from 'react';
import { Link } from 'react-router-dom';
import Section from './reusable/Section';

const features = [
	{
		title: 'Oferte Exclusive în Timp Real',
		description:
			'Primește notificări instantanee cu cele mai bune oferte din zona ta. Fie că ești în căutarea unei cafele delicioase sau a unui serviciu de înfrumusețare, Mideally îți aduce reduceri exclusive direct pe telefonul tău, exact când ai nevoie de ele.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Explorare Locală Personalizată',
		description:
			'Descoperă comori ascunse chiar lângă tine. Mideally folosește geolocalizarea pentru a-ți recomanda afaceri locale în funcție de preferințele tale, transformând fiecare plimbare prin oraș într-o oportunitate de a găsi noi locuri favorite.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Coduri Bonus cu Termen Limitat',
		description:
			'Simte adrenalina vânătorii de oferte! Salvează coduri bonus exclusive, valabile pentru o perioadă limitată, și bucură-te de reduceri substanțiale la produsele și serviciile tale preferate. Cu Mideally, fiecare minut contează în cursa pentru cele mai bune deal-uri.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Comunitate Locală Vibrantă',
		description:
			'Conectează-te cu afacerile locale într-un mod autentic. Urmărește-ți localurile preferate, descoperă evenimente locale și fii parte dintr-o comunitate care susține și celebrează spiritul antreprenorial local. Cu Mideally, nu ești doar un client, ești un membru valoros al comunității tale.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		),
	},
];

export default function Features() {
	return (
		<Section className="py-32 lg:py-48">
			<Link to="/despre-noi">
				<div className="flex justify-center mb-16">
					<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 w-fit">
						Despre noi
						<span className="font-semibold text-pink-600 ml-2">
							<span className="absolute inset-0" aria-hidden="true"></span>Citește mai multe{' '}
							<span aria-hidden="true">&rarr;</span>
						</span>
					</div>
				</div>
			</Link>
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
						Mideally pentru utilizatori
					</h2>
					<p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
						Transformă-ți experiența de cumpărături și explorează orașul tău într-un mod nou și captivant.
						Cu Mideally, fiecare zi devine o aventură plină de oportunități de economisire și descoperiri
						locale.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					{features.map((feature, index) => (
						<div key={index} className="flex flex-col items-center justify-center text-center gap-4">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
									{feature.icon}
								</div>
							</div>
							<div className="ml-4">
								<h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
								<p className="mt-2 text-base text-gray-500 font-light">{feature.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* <div className="mt-16 flex justify-center">
					<Link
						to="/login"
						className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-200 ease-in-out shadow-sm"
					>
						Intră în cont
					</Link>
				</div> */}
			</div>
		</Section>
	);
}
