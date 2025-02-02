import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import RegisterBusiness from './pages/RegisterBusiness';
import Layout from './components/Layout';

export default function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/despre-noi" element={<About />} />
						<Route path="/noutati" element={<News />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/inregistrare-business" element={<RegisterBusiness />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}
