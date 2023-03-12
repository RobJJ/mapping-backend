import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GeoJSON } from "react-leaflet";
// import L from "leaflet";
import useGeoJson from "../geojson/useGeoJson";
import { style } from "../map-functions/map-functions";
// import { vietnamGeoJSON } from "../testData/geodata";
import { vietnamGeoJSON2 } from "../testData/geodata2";
import { httpGetGeoJsonData } from "../geojson/requests";
// import useGeoJson from "../geojson/useGeoJson";

function MapComponent({ geoData }) {
  let hashKey = uuidv4();
  const ref = useRef();
  useEffect(() => {
    hashKey = uuidv4();
  }, [geoData]);
  // const { geoDataVietnam } = useGeoJson();

  // const { geoJsonData } = useGeoJson();
  // console.log(geoData);

  return (
    <>
      <GeoJSON
        // onEachFeature={onEachFeature}
        // this key is important to tell the map that the data has rendered!
        key={hashKey}
        style={style}
        data={geoData}
        ref={ref}
      ></GeoJSON>
    </>
  );
}

export default MapComponent;
