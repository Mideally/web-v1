import React from 'react';
import graphs1 from '../assets/graphs1.png';
import graphs2 from '../assets/graphs2.jpg';
import Button from './reusable/Button';
import { Link } from 'react-router-dom';
import Section from './reusable/Section';

const features = [
	{
		title: 'Micro Marketing Inteligent',
		description:
			'Creați și lansați campanii publicitare personalizate direct din aplicație, cu bugete accesibile și targeting precis în zona dvs. Ajungeți la clienții potriviți exact când au nevoie de serviciile dvs, fără expertiza unei agenții de marketing.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
				/>
			</svg>
		),
	},
	{
		title: 'Sistem de Coduri Bonus în Timp Real',
		description:
			'Emiteți și gestionați coduri promoționale digitale care ajung instant la clienții din proximitate. Controlați numărul de reduceri, perioada de valabilitate și monitorizați în timp real impactul promoțiilor asupra businessului dvs.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
				/>
			</svg>
		),
	},
	{
		title: 'Vizibilitate Locală Crescută',
		description:
			'Construiți-vă prezența în comunitatea locală prin intermediul unei micro-pagini personalizate în aplicație. Conectați-vă cu clienții fideli, promovați evenimente și oferte speciale, și creșteți organic numărul de clienți recurenți.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
				/>
			</svg>
		),
	},
	{
		title: 'Analize și Rapoarte Detaliate',
		description:
			'Monitorizați performanța afacerii cu instrumente intuitive de analiză. Urmăriți eficiența promoțiilor, comportamentul clienților și tendințele de consum pentru a lua decizii informate în dezvoltarea businessului dvs.',
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
];

export default function BusinessTools() {
	return (
		<div className="py-16 bg-white border-t border-gray-200">
			<Section>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="lg:col-span-8">
							<h2 className="text-4xl font-extrabold tracking-tight lg:leading-tight text-gray-900 sm:text-5xl">
								Pentru afacerile mici și mijlocii
							</h2>
							<p className="mt-4 text-lg text-gray-500">
								Transformați-vă businessul local într-un brand puternic - fără complexitatea soluțiilor
								tradiționale de marketing. Accelerați creșterea, eliminați costurile inutile și
								conectați-vă cu clienții într-un mod simplu și eficient.
							</p>
							<div className="mt-8 space-y-8">
								{features.map((feature, index) => (
									<div key={index} className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												{feature.icon}
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
											<p className="mt-2 text-base text-gray-500 font-light">
												{feature.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="mt-12 lg:mt-0 lg:col-span-4">
							<div className="grid grid-cols-1 gap-8">
								{/* Analytics Dashboard Preview */}
								<div className="h-auto bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg rounded-lg shadow-lg border border-gray-200">
									<img src={graphs1} alt="Analytics Graph" className="w-full h-full object-cover" />
								</div>
								<div className="h-auto bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg rounded-lg shadow-lg border border-gray-200">
									<img src={graphs2} alt="Analytics Graph" className="w-full h-full object-cover" />
								</div>
							</div>
						</div>
					</div>

					{/* New CTA Button */}
					<div className="mt-16 flex justify-center flex-col items-center gap-4">
						<p className="text-lg text-center">
							Înscrie-ți businessul în Mideally și conectează-te la clienții tăi.
						</p>
						<div className="flex justify-center items-center gap-4 flex-col lg:flex-row">
							<Button size={'small'}>
								<Link to="/inregistrare-business">Înregistrează-te</Link>
							</Button>
							<Link to="/noutati" className="font-light hover:underline">
								Roadmap funcționalități →
							</Link>
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}
