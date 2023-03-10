import { useRef } from "react";
import { GeoJSON } from "react-leaflet";
// import L from "leaflet";
import useGeoJson from "../geojson/useGeoJson";
import { style } from "../map-functions/map-functions";
import { vietnamGeoJSON } from "../testData/geodata";

// import useGeoJson from "../geojson/useGeoJson";

function MapComponent(params) {
  const { geoJsonData } = useGeoJson();
  console.log(geoJsonData);
  const ref = useRef();

  return (
    <>
      <GeoJSON
        // onEachFeature={onEachFeature}
        style={style}
        // data={geoJsonData}
        data={vietnamGeoJSON}
        ref={ref}
      ></GeoJSON>
    </>
  );
}

export default MapComponent;
