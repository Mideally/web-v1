import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/reusable/Section';
import PageHeader from '../components/reusable/PageHeader';
import SectionHeader from '../components/reusable/SectionHeader';
import SimpleCard from '../components/reusable/SimpleCard';
import team from '../data/team.json';
import ExampleImage from '../assets/roadmap-1.jpg';
import Quote from '../components/reusable/Quote';
import Button from '../components/reusable/Button';
import { Link } from 'react-router-dom';

export default function About() {
	const missionAndVision = [
		{
			title: 'Mobile friendly',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			image: ExampleImage,
		},
		{
			title: 'Performance',
			description:
				'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: ExampleImage,
		},
		{
			title: 'Security',
			description:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			image: ExampleImage,
		},
	];

	return (
		<>
			<SEO title="Despre noi" description="Despre noi" />
			<Section>
				<PageHeader
					title="Despre noi"
					subtitle="Află mai multe despre echipa noastră și cum a luat naștere Mideally."
					className="text-center mt-8 lg:mt-16 mb-8"
				/>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 pt-8 place-items-center">
					{team.map((member) => (
						<SimpleCard
							key={member.name}
							title={member.name}
							supraTitle={member.role}
							image={require(`../assets/team/${member.image}`)}
							description={member.description}
							linkedin={member.linkedin}
							className="max-w-sm w-full"
						/>
					))}
				</div>
			</Section>

			<Section className="pt-8 lg:pt-2">
				<SectionHeader
					title="Povestea Mideally"
					subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					className="text-center mt-8 lg:mt-16"
				/>
				<p className="font-light leading-8 text-gray-900 text-center pb-8 lg:pb-16">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Quote
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					author="Dragoș Schițcu"
					role="Co-fondator Mideally"
					image={require('../assets/team/dragos-schitcu.jpeg')}
				/>
				<p className="font-light leading-8 text-gray-900 text-center pt-8 lg:pt-16">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</Section>

			<Section className="pb-16 pt-8 lg:pt-2">
				<SectionHeader
					title="Misiune și viziune"
					subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					className="text-center mt-8 lg:mt-16"
				/>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 place-items-center">
					{missionAndVision.map((item) => (
						<SimpleCard
							key={item.title}
							title={item.title}
							description={item.description}
							image={item.image}
						/>
					))}
				</div>
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
			</Section>
		</>
	);
}
