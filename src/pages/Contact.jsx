import React from 'react';
import Button from '../components/reusable/Button';
import Section from '../components/reusable/Section';
import SectionHeader from '../components/reusable/SectionHeader';

export default function Contact() {
	return (
		<Section>
			<div className="pb-16">
				<SectionHeader
					title="Contact"
					subtitle="Contactează-ne pentru orice întrebare sau feedback."
					className="text-center mt-8 lg:mt-16"
				/>

				<div className="max-w-5xl mx-auto mt-12 sm:mt-16">
					<div className="mt-6 overflow-hidden bg-white rounded-xl border border-gray-200 shadow-lg">
						<div className="p-6 lg:p-12">
							<form action="#" method="POST">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
									<div>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<svg
													className="w-4 h-4 text-gray-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
													/>
												</svg>
											</div>
											<input
												type="text"
												name="name"
												id="name"
												placeholder="Nume și prenume"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
											/>
										</div>
									</div>

									<div>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<svg
													className="w-4 h-4 text-gray-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
													/>
												</svg>
											</div>
											<input
												type="email"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
												placeholder="Adresa de email"
												required
											/>
										</div>
									</div>

									<div>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<svg
													className="w-4 h-4 text-gray-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
													/>
												</svg>
											</div>
											<input
												type="tel"
												name="phone"
												id="phone"
												placeholder="Telefon"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
											/>
										</div>
									</div>

									<div>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<svg
													className="w-4 h-4 text-gray-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
													/>
												</svg>
											</div>
											<input
												type="text"
												name="company"
												id="company"
												placeholder="Numele companiei"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
											/>
										</div>
									</div>

									<div className="sm:col-span-2">
										<div className="relative">
											<div className="absolute top-[13px] left-0 flex items-center pl-3 pointer-events-none">
												<svg
													className="w-4 h-4 text-gray-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
													/>
												</svg>
											</div>
											<textarea
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
												placeholder="Mesaj"
											></textarea>
										</div>
									</div>

									<div className="sm:col-span-2">
										<Button>Trimite mesajul</Button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
