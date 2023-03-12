import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapComponent from "../components/mapComponent";
import "leaflet/dist/leaflet.css";
import { httpGetMapboxUrl } from "../mapbox/requests";

export const MapPage = ({ geoData }) => {
  const [url, setUrl] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    (async function runOnce() {
      let MAPBOX_URL = await httpGetMapboxUrl().then((url) => url);
      setUrl(MAPBOX_URL);
    })();
  }, []);

  console.log("the url bruv", url);
  const defaultPosition = [16.06, 108.21];

  if (!url) return <div>Loading data...</div>;

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
        url={url.MAPBOX_URL}
        // url="https://api.mapbox.com/styles/v1/robjj/clce68ufg003614nvvjlep2ke/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iamoiLCJhIjoiY2xjZTVva3NhMGQydzN3bGx5cnEwd2I1eSJ9.X-ErXEB4RZMQmGZvsaMGNA"
      />
      <MapComponent geoData={geoData} />
    </MapContainer>
  );
};

//
