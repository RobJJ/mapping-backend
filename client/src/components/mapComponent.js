import { useState } from "react";
import { GeoJSON } from "react-leaflet";
import { httpGetGeoJsonData } from "../geojson/requests";
// import useGeoJson from "../geojson/useGeoJson";

export const MapComponent = () => {
  // const { geoJsonData } = useGeoJson();
  // const [data, setData] = useState();
  const res = httpGetGeoJsonData().then((res) => console.log(res));
  // console.log(data);
  return (
    <>
      <GeoJSON
      // onEachFeature={onEachFeature}
      // style={style}
      // data={data}
      // data={districtGeoJSON}
      // ref={testRef}
      ></GeoJSON>
    </>
  );
};
