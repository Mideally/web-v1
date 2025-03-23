import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import RegisterBusiness from './pages/RegisterBusiness';
import LocationPage from './pages/LocationPage';
import Layout from './components/Layout';
import ScrollToTop from './components/utils/ScrollToTop';
import ReactGA from 'react-ga4';
import Partners from './pages/Partners';

export default function App() {
	ReactGA.initialize('G-6RG8B7LJW0');

	return (
		<HelmetProvider>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/despre-noi" element={<About />} />
						<Route path="/noutati" element={<News />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/inregistrare-business" element={<RegisterBusiness />} />
						<Route path="/parteneri" element={<Partners />} />
						<Route path="/parteneri/:citySlug" element={<Partners />} />
						<Route path="/parteneri/:citySlug/:id" element={<LocationPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}
