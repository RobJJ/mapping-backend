import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import { httpGetGeoJsonData } from "../geojson/requests";

// import useGeoJson from "../geojson/useGeoJson";

export const MapComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    httpGetGeoJsonData().then((res) => setData(res));
  }, []);

  console.log(data);

  if (!data) return <div>Hey , we loading the data bitch!</div>;

  return (
    <>
      <GeoJSON
        // onEachFeature={onEachFeature}
        // style={style}
        data={data}
        // data={districtGeoJSON}
        // ref={testRef}
      ></GeoJSON>
    </>
  );
};
