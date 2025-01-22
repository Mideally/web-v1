import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
	return (
		<div className="relative min-h-screen flex flex-col">
			{/* Background shape */}
			<div className="fixed inset-0 -z-10 filter blur-xl overflow-hidden">
				<div
					className="absolute w-[200%] aspect-square top-[-40%] right-[-50%] md:w-[200%] md:top-[-120%] md:right-[-120%] bg-gradient-to-tr from-pink-100/70 via-purple-100/70 to-blue-100/70 animate-slow-spin"
					style={{
						clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 
							80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 
							45.2% 34.5%, 27.5% 56.7%, 10.1% 84.9%, 17.9% 100%, 37.6% 76.8%, 
							76.1% 97.7%, 74.1% 44.1%)`,
					}}
				/>
			</div>

			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
