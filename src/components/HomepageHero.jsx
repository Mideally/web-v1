import React from 'react';
import Button from './reusable/Button';
import videoBanner1 from '../assets/video-banner-1.mp4';

export default function HomepageHero() {
	return (
		<section>
			<div className="grid max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid-cols-12">
				<div className="mb-8 lg:mb-0 lg:mt-0 lg:col-span-5 lg:flex order-1 lg:order-2">
					<video
						className="w-full h-64 lg:h-auto rounded-lg object-cover shadow-lg border border-gray-200"
						autoPlay
						muted
						loop
						playsInline
					>
						<source src={videoBanner1} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="mr-auto place-self-center lg:col-span-7 order-2 lg:order-1 lg:pr-8">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:leading-tight md:text-5xl xl:text-6xl">
						Economisește zilnic. Descoperă{' '}
						<span className="font-extrabold relative inline-block stroke-current">
							local
							<svg
								className="absolute -bottom-1.5 w-full max-h-3.5 text-pink-500"
								viewBox="0 0 55 5"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
							>
								<path
									d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
									strokeWidth="3"
								></path>
							</svg>
						</span>
						.
					</h1>
					<p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
						Conectează-te cu afacerile locale preferate și profită de oferte exclusive în timp real. Cu
						Mideally, fiecare zi aduce o nouă oportunitate de a economisi.
					</p>
					<form className="flex flex-col sm:flex-row gap-4">
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</div>
							<input
								type="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
								placeholder="Adresa de email"
								required
							/>
						</div>
						<Button color="pink" size={'small'}>
							Află când lansăm
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
