import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapComponent from "../components/mapComponent";
import "leaflet/dist/leaflet.css";

const MAPBOX_URL = process.env.MAPBOX_URL;

export const MapPage = ({ geoData }) => {
  const mapRef = useRef();
  const defaultPosition = [16.06, 108.21];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      scrollWheelZoom={true}
      className="h-full w-full"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={MAPBOX_URL}
        // url="https://api.mapbox.com/styles/v1/robjj/clce68ufg003614nvvjlep2ke/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iamoiLCJhIjoiY2xjZTVva3NhMGQydzN3bGx5cnEwd2I1eSJ9.X-ErXEB4RZMQmGZvsaMGNA"
      />
      <MapComponent geoData={geoData} />
    </MapContainer>
  );
};

//
