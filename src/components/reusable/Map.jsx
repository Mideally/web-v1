import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '400px',
	borderRadius: '0.5rem',
};

export default function Map({ lat, lng }) {
	const center = {
		lat: parseFloat(lat),
		lng: parseFloat(lng),
	};

	return (
		<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
				options={{
					styles: [
						{
							featureType: 'poi',
							elementType: 'labels',
							stylers: [{ visibility: 'off' }],
						},
					],
					disableDefaultUI: true,
					zoomControl: true,
				}}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}
