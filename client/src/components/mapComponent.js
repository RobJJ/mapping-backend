import { useEffect, useRef, useState } from "react";
import { GeoJSON } from "react-leaflet";
// import L from "leaflet";
import useGeoJson from "../geojson/useGeoJson";
import { style } from "../map-functions/map-functions";
// import { vietnamGeoJSON } from "../testData/geodata";
import { vietnamGeoJSON2 } from "../testData/geodata2";
import { httpGetGeoJsonData } from "../geojson/requests";
// import useGeoJson from "../geojson/useGeoJson";

function MapComponent({ geoData }) {
  const ref = useRef();
  console.log(geoData);
  // const { geoDataVietnam } = useGeoJson();

  // const { geoJsonData } = useGeoJson();
  // console.log(geoJsonData);

  return (
    <>
      <GeoJSON
        // onEachFeature={onEachFeature}
        style={style}
        data={geoData}
        // data={vietnamGeoJSON2}
        ref={ref}
      ></GeoJSON>
    </>
  );
}

export default MapComponent;
