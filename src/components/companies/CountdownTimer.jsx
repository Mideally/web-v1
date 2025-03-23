import React, { useState, useEffect, useCallback } from 'react';

export default function CountdownTimer({ validTo }) {
	const calculateTimeLeft = useCallback(() => {
		const difference = new Date(validTo) - new Date();

		if (difference <= 0) {
			return null;
		}

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}, [validTo]);

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
	const isEnding = timeLeft && timeLeft.days === 0 && timeLeft.hours < 24; // Highlight last 24 hours

	useEffect(() => {
		if (!timeLeft) return;

		const timer = setInterval(() => {
			const newTimeLeft = calculateTimeLeft();
			if (!newTimeLeft) {
				clearInterval(timer);
			}
			setTimeLeft(newTimeLeft);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, calculateTimeLeft]);

	if (!timeLeft) return null;

	return (
		<div
			className={`
			inline-flex items-center gap-2 px-3 py-1.5 rounded-full
			${isEnding ? 'bg-red-50 border border-red-100' : 'bg-purple-50 border border-purple-100'}
		`}
		>
			<div
				className={`
				w-2 h-2 rounded-full animate-pulse
				${isEnding ? 'bg-red-500' : 'bg-purple-500'}
			`}
			/>
			<div className="flex items-center gap-2">
				<span
					className={`
					text-sm font-medium
					${isEnding ? 'text-red-600' : 'text-purple-600'}
				`}
				>
					{isEnding ? 'Expiră în:' : 'Timp rămas:'}
				</span>
				<div className="flex items-center gap-1">
					{timeLeft.days > 0 && <TimeUnit value={timeLeft.days} unit="d" isEnding={isEnding} />}
					<TimeUnit value={timeLeft.hours} unit="h" isEnding={isEnding} />
					<TimeUnit value={timeLeft.minutes} unit="m" isEnding={isEnding} />
					<TimeUnit value={timeLeft.seconds} unit="s" isEnding={isEnding} />
				</div>
			</div>
		</div>
	);
}

function TimeUnit({ value, unit, isEnding }) {
	return (
		<div className="flex items-center">
			<span
				className={`
				font-mono font-bold text-sm
				${isEnding ? 'text-red-600' : 'text-purple-600'}
			`}
			>
				{value.toString().padStart(2, '0')}
			</span>
			<span
				className={`
				text-xs
				${isEnding ? 'text-red-500' : 'text-purple-500'}
			`}
			>
				{unit}
			</span>
		</div>
	);
}
