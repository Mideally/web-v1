import React from 'react';
import Roadmap from '../components/Roadmap';
import Section from '../components/reusable/Section';
import SectionHeader from '../components/reusable/SectionHeader';
import arena1 from '../assets/arena-1.jpg';

export default function News() {
	return (
		<Section>
			{/* <PageHeader title="Noutăți" subtitle="Află ultimele informații despre Mideally." /> */}
			<Roadmap />
			<SectionHeader
				title="Noutăți"
				subtitle="Apariții publice, evenimente și alte informații despre Mideally."
				className="text-center mt-8 lg:mt-16"
			/>

			<div className="rounded-3xl overflow-hidden relative mb-8 lg:mb-16">
				<img
					src={arena1}
					alt="Arena"
					className="w-full h-full object-cover filter saturate-50 blur-[3px] absolute top-0 bottom-0"
				/>
				<div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
				<div className="flex flex-col justify-center items-center z-1 relative p-8 lg:p-16 text-center">
					<h1 className="text-2xl lg:text-4xl font-bold text-white mb-8">ARENA URȘILOR 2024</h1>
					<p className="text-lg lg:text-xl text-white font-light leading-relaxed lg:leading-relaxed">
						Dragoș Schițcu, unul dintre co-fondatori, a participat la Arena Urșilor 2024, inițiativă
						susținută de ProAfaceri România. În cadrul acestui eveniment, Dragoș a prezentat investitorilor
						ideea Mideally. Proiectul s-a bucurat de feedback pozitiv, unul dintre rezultatele imediate
						fiind un parteneriat încheiat cu platforma Digital România, fondată de Horia Nes.
					</p>
				</div>
			</div>
		</Section>
	);
}
