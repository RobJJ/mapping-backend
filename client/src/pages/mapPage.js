import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import MapComponent from "../components/mapComponent";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { httpGetMapboxUrl } from "../mapbox/requests";
import useGeoJson from "../geojson/useGeoJson";
import { v4 as uuidv4 } from "uuid";
import { style } from "../map-functions/map-functions";
import { httpGetGeoJsonData } from "../geojson/requests";
import { vietnamGeoJSON2 } from "../testData/geodata2";

const defaultPosition = [16.06, 108.21];

export const MapPage = ({ data }) => {
  // const [url, setUrl] = useState(null);
  // // const mapRef = useRef();

  // const { geoJsonData } = useGeoJson();

  // useEffect(() => {
  //   (async function runOnce() {
  //     let MAPBOX_URL = await httpGetMapboxUrl().then((url) => url);
  //     setUrl(MAPBOX_URL);
  //   })();
  // }, []);

  // // console.log("the url bruv", url);

  // if (!url || !geoJsonData) return <div>Loading data...</div>;
  // // let hashKey = uuidv4();

  // console.log("url is : ", Boolean(url));
  // console.log("geoJsonData is : ", Boolean(url));
  // console.log("anything coming thru?? ");

  const mapRef = useRef();
  // const { geoJsonData } = useGeoJson();
  // if (!geoJsonData) return <div>Loading!</div>;

  // useEffect(() => {
  //   const { current = {} } = mapRef;

  //   console.log(current);
  // }, []);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      scrollWheelZoom={true}
      className="h-full w-full"
      ref={mapRef}
      // key={hashKey}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url={url.MAPBOX_URL}
        url="https://api.mapbox.com/styles/v1/robjj/clce68ufg003614nvvjlep2ke/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iamoiLCJhIjoiY2xjZTVva3NhMGQydzN3bGx5cnEwd2I1eSJ9.X-ErXEB4RZMQmGZvsaMGNA"
      />
      <GeoJSON
        // onEachFeature={onEachFeature}
        // this key is important to tell the map that the data has rendered!
        key={uuidv4()}
        style={style}
        data={data}
        // ref={ref}
      ></GeoJSON>
      ;
    </MapContainer>
  );
};

//<MapComponent geoData={geoJsonData} />

//  <GeoJSON
//    // onEachFeature={onEachFeature}
//    // this key is important to tell the map that the data has rendered!
//    key={uuidv4()}
//    style={style}
//    data={geoJsonData}
//    // ref={ref}
//  ></GeoJSON>;
