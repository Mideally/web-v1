import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo-3.png';

const NavigationLinks = ({ isMobile = false, onClick = () => {} }) => {
	const links = [
		{ to: '/', text: 'Acasă' },
		{ to: '/despre-noi', text: 'Despre noi' },
		{ to: '/noutati', text: 'Noutăți' },
		{ to: '/contact', text: 'Contact' },
	];

	const baseStyles = `transition-colors duration-200`;
	const mobileStyles = isMobile ? 'text-2xl font-medium' : '';

	return links.map((link) => (
		<NavLink
			key={link.to}
			to={link.to}
			className={({ isActive }) =>
				`${baseStyles} ${mobileStyles} ${
					isActive ? 'text-pink-600' : 'text-gray-600 font-medium hover:text-gray-900'
				}`
			}
			onClick={onClick}
		>
			{link.text}
		</NavLink>
	));
};

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		// Prevent scrolling when menu is open
		document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
	};

	return (
		<header>
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a href="/" className="text-2xl font-bold text-gray-900">
							<img src={logo} alt="Mideally" className="h-8 w-auto" />
						</a>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<NavigationLinks />
					</nav>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							type="button"
							className="text-gray-600 hover:text-gray-900 focus:outline-none"
							onClick={toggleMenu}
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={`fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex flex-col h-full">
					{/* Close Button */}
					<div className="p-4 flex justify-end">
						<button
							type="button"
							className="text-gray-600 hover:text-gray-900 focus:outline-none"
							onClick={toggleMenu}
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Mobile Navigation Links */}
					<nav className="flex flex-col items-center justify-center flex-1 space-y-8">
						<NavigationLinks isMobile={true} onClick={toggleMenu} />
					</nav>
				</div>
			</div>
		</header>
	);
}
