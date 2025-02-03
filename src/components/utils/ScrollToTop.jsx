import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		// Only scroll to top if there's no hash in the URL
		if (!hash) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}, [pathname, hash]);

	return null;
}
