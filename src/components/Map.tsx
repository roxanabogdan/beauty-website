import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export const Map = () => {
    const position: [number, number] = [45.7211904,21.2402176]; // Example coordinates (latitude, longitude)

    return <div className="flex flex-row items-center w-full p-4">
    {/* Map container with rounded borders */}
    <MapContainer center={position} zoom={13} className="h-64 w-2/5 rounded-lg overflow-hidden">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty popup.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
}