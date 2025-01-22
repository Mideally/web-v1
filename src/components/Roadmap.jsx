import React from 'react';
import SimpleCard from './reusable/SimpleCard';
import SectionHeader from './reusable/SectionHeader';
import roadmap1 from '../assets/roadmap-1.jpg';
import roadmap2 from '../assets/roadmap-2.jpg';
import roadmap3 from '../assets/roadmap-3.jpg';
import roadmap4 from '../assets/roadmap-4.jpg';
import roadmap5 from '../assets/roadmap-5.jpg';
import roadmap6 from '../assets/roadmap-6.jpg';

export default function Roadmap() {
	return (
		<div className="pb-16">
			<SectionHeader
				title="Roadmap"
				subtitle="Lista de funcționalități care vor fi implementate în Mideally"
				className="text-center mt-8 lg:mt-16"
			/>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
				<SimpleCard
					image={roadmap1}
					title="MVP"
					supraTitle="Faza 1"
					description={
						<ul className="list-disc list-inside text-sm font-light flex flex-col gap-2">
							<li>Lansarea website-ului</li>
							<li>Micro-pagini v1 pentru fiecare afacere înregistrată</li>
							<li>Funcționalitatea de a adăuga vouchere</li>
						</ul>
					}
				/>
				<SimpleCard
					image={roadmap2}
					title="Versiunea Beta"
					supraTitle="Faza 2"
					description={
						<ul className="list-disc list-inside text-sm font-light flex flex-col gap-2">
							<li>Deschiderea platformei pentru public</li>
							<li>Funcționalități de bază pentru utilizatorii clienți</li>
							<li>Sistem de notificări simple pentru oferte</li>
							<li>Scanare coduri QR pentru validare vouchere</li>
						</ul>
					}
				/>
				<SimpleCard
					image={roadmap3}
					title="Prima versiune stabilă"
					supraTitle="Faza 3"
					description={
						<ul className="list-disc list-inside text-sm font-light flex flex-col gap-2">
							<li>Implementare sistem de micro-ads pentru business</li>
							<li>Sistem de plăți integrat pentru vouchere</li>
							<li>Dashboard pentru business cu statistici de bază</li>
							<li>Funcționalități sociale (reviews, ratings)</li>
						</ul>
					}
				/>
				<SimpleCard
					image={roadmap4}
					title="Aplicații Mobile"
					supraTitle="Faza 4"
					description={
						<ul className="list-disc list-inside text-sm font-light flex flex-col gap-2">
							<li>Lansare aplicație iOS și Android</li>
							<li>Implementare geolocalizare pentru descoperirea ofertelor</li>
							<li>Sistem de notificări push personalizate</li>
							<li>Funcționalități sociale (reviews, ratings)</li>
						</ul>
					}
				/>
				<SimpleCard
					image={roadmap5}
					title="Versiunea 2.0"
					supraTitle="Faza 5"
					description={
						<ul className="list-disc list-inside text-sm font-light flex flex-col gap-2">
							<li>Extindere în orașele principale din România</li>
							<li>Implementare sistem de recomandări personalizate</li>
							<li>Program de referral pentru utilizatori și business</li>
							<li>Oportunitate de a deveni utilizator-fondator</li>
						</ul>
					}
				/>
				<SimpleCard
					image={roadmap6}
					title="Integrare AI"
					supraTitle="Faza 6"
					description={
						<ul className="list-disc list-inside text-sm font-light flex flex-col gap-2">
							<li>Recomandări bazate pe istoric și preferințe folosind AI</li>
							<li>Asistent AI pentru trasee bazate pe istoricul utilizatorilor</li>
							<li>Dashboard cu predicții AI pentru perioadele optime de lansare a promoțiilor</li>
							<li>Generator AI de texte promoționale personalizate</li>
						</ul>
					}
				/>
			</div>
		</div>
	);
}
