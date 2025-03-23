import React, { useState } from 'react';

export default function LocationSubscribers({ initialCount }) {
	const [followers, setFollowers] = useState(initialCount);
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleSubscribe = () => {
		setFollowers((prev) => prev + 1);
		setIsSubscribed(true);
	};

	return (
		<div className="flex flex-col items-end">
			<div className="text-white mb-2">
				<span className="font-bold text-xl">{followers}</span>
				<span className="text-sm ml-2 opacity-90">fani</span>
			</div>
			<button
				onClick={handleSubscribe}
				disabled={isSubscribed}
				className={`
          px-4 py-2 rounded-full text-sm font-medium
          ${
				isSubscribed
					? 'bg-white/20 text-white/60 cursor-not-allowed'
					: 'bg-white text-pink-600 hover:bg-white/90 transition-colors'
			}
        `}
			>
				{isSubscribed ? 'Deja ești fan' : 'Devino fan'}
			</button>
		</div>
	);
}
