import React, { useState, useEffect, useRef } from 'react';
import Button from './reusable/Button';

export default function HomepageHero() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [videoLoaded, setVideoLoaded] = useState(false);
	const videoRef = useRef(null);
	const videoWrapperRef = useRef(null);
	const senderURL = 'https://api.sender.net/v2/subscribers';
	const senderAPIKey = process.env.REACT_APP_SENDER_API_KEY;

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '50px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !videoLoaded) {
					const video = videoRef.current;
					if (video) {
						video.src = require('../assets/video-banner-1.mp4');
						video.load();
						setVideoLoaded(true);

						video.addEventListener(
							'loadeddata',
							() => {
								video.play();
							},
							{ once: true }
						);
					}
				}
			});
		}, options);

		// Store the current value of the ref
		const currentWrapper = videoWrapperRef.current;

		if (currentWrapper) {
			observer.observe(currentWrapper);
		}

		return () => {
			if (currentWrapper) {
				observer.unobserve(currentWrapper);
			}
		};
	}, [videoLoaded]);

	const headers = {
		Authorization: `Bearer ${senderAPIKey}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const data = {
				email: email,
				groups: ['ax8VMB'],
				fields: { '{$type}': 'User' },
				trigger_automation: false,
			};

			const response = await fetch(senderURL, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setEmail('');
				setSuccess(true);
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.error('Error:', error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section>
			<div className="grid max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid-cols-12">
				<div className="mb-8 lg:mb-0 lg:mt-0 lg:col-span-5 lg:flex order-1 lg:order-2">
					<div
						ref={videoWrapperRef}
						className="w-full h-64 lg:h-auto rounded-lg overflow-hidden shadow-lg border border-gray-200"
					>
						<video
							ref={videoRef}
							className="w-full h-full object-cover"
							autoPlay
							muted
							loop
							playsInline
							poster={require('../assets/video-poster.jpg')}
						>
							<source type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
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
					<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
								placeholder="Adresa de email"
								required
							/>
						</div>
						<Button
							type="submit"
							color="pink"
							size={'small'}
							loading={loading}
							disabled={loading}
							className={loading ? 'opacity-50' : ''}
						>
							{loading ? '...' : 'Află când lansăm'}
						</Button>
					</form>
					{success && (
						<p className="text-green-500 mt-2 text-sm">
							Te-ai înscris cu succes! Vei primi un email când lansăm platforma.
						</p>
					)}
					{error && (
						<p className="text-red-500 mt-2 text-sm">A apărut o eroare. Vă rugăm încercați din nou.</p>
					)}
				</div>
			</div>
		</section>
	);
}
