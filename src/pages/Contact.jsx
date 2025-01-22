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
										<label htmlFor="" className="text-base font-medium text-gray-900">
											{' '}
											Nume și prenume{' '}
										</label>
										<div className="mt-2.5 relative">
											<input
												type="text"
												name=""
												id=""
												placeholder="Nume și prenume"
												className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="" className="text-base font-medium text-gray-900">
											{' '}
											Email{' '}
										</label>
										<div className="mt-2.5 relative">
											<input
												type="email"
												name=""
												id=""
												placeholder="Email"
												className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="" className="text-base font-medium text-gray-900">
											{' '}
											Telefon{' '}
										</label>
										<div className="mt-2.5 relative">
											<input
												type="tel"
												name=""
												id=""
												placeholder="Telefon"
												className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="" className="text-base font-medium text-gray-900">
											Numele companiei
										</label>
										<div className="mt-2.5 relative">
											<input
												type="text"
												name=""
												id=""
												placeholder="Numele companiei"
												className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
											/>
										</div>
									</div>

									<div className="sm:col-span-2">
										<label htmlFor="" className="text-base font-medium text-gray-900">
											Mesaj
										</label>
										<div className="mt-2.5 relative">
											<textarea
												name=""
												id=""
												placeholder="Mesaj"
												className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
												rows="4"
											></textarea>
										</div>
									</div>

									<div className="sm:col-span-2">
										<Button>Trimite</Button>
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
